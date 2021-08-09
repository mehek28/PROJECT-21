
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ground;
let dustbin_right;
let dustbin_left;
var ball;




function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(800,690,width,20);
	dustbin_right =new Ground(1100,650,20,120);
	dustbin_left =new Ground(1300,650,20,120);

	var ball_options={
		restitution : 0.8,
		isStatic:false,
		density: 2,
		friction:0
		
}

ball=Bodies.circle(260,100,20,ball_options);
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ground.show();
  dustbin_right.show();
  dustbin_left.show();  

  ellipse(ball.position.x,ball.position.y,20,20);
}
 
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
}



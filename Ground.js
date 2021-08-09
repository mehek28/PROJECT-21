class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);

    this.x=x;
    this.y=y;
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
          push();
translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
  
}



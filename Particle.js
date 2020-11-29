class Particle {
    constructor(x, y, r) {
        var options ={
          restitution: 0.4  
        }
        this.body = Bodies.circle(x, y, r, options);
        this.color = color(random(0,255), random(0, 255), random(0,255));
        World.add(world, this.body);
        
    }
    display() {
      var paperpos = this.body.position;
      push();
      translate(paperpos.x, paperpos.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse( 0, 0, 15, 15);
      pop();

  }

    
}
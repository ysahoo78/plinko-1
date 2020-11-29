class Plinko {
    constructor(x, y, r) {
        
                var options = {
                    isStatic : true,
                    restitution : 0.3,
                    friction : 0.5,
                    density : 1.2
                }
                this.x = x;
                this.y = y;
                this.r = r;
                
                this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
                World.add(world, this.body);
        
    }
            display() {
                var paperpos = this.body.position;
                push();
                translate(paperpos.x, paperpos.y);
                ellipseMode(CENTER);
                ellipse( 0, 0, 10, 10);
                pop();
        
            }
                
        
            
        
        
        
    }

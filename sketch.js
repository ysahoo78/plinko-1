const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(800,800);

  
  
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    
    for (var k = 0; k<=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
    }

  for (var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j,75, 5));
  }
  for (var j = 80; j <= width - 10; j = j + 50)
  {
    plinkos.push(new Plinko(j,175, 5));
  }
  for (var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j,275, 5));
  }
  for (var j = 80; j <= width - 10; j = j + 50)
  {
    plinkos.push(new Plinko(j,375, 5));
  }
  for (var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j,475, 5));
  }
  



}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount % 90 === 0){
    particles.push(new Particle(random(100, 700), 10, 10));
  }

  for (var v = 0; v < particles.length; v++){
    particles[v].display();
  }
  for (var k = 0; k < divisions.length; k = k + 1) {
    divisions[k].display();
  }
  
  

  

}
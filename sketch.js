
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 dustbin1 = new Dustbin(600,690,225,20);
    dustbin2 = new Dustbin(500,640,20,100);
    dustbin3 = new Dustbin(700,640,20,100)
 paper1 = new Paper(200,650,50)
 ground = new Ground(400,height,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper1.display()
  ground.display()
  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
  }



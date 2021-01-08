
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	gamestate = "start";

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	//dustbin = new Dustbin(720,390,100,10);
	//paper = new Paper(100,300,10);
	ground = new Ground(400,680,800,20);

	paper= new Paper(100,650,25);

	leftSide= new Dustbin(450,620,20,100);

	bottomSide= new Dustbin(510,660,100,20);

	rightSide= new Dustbin(570,620,20,100);
		
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  paper.display();
  leftSide.display();
  bottomSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



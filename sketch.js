
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ROOF = new Roof(250,200,400,40);
	BOB1 = new Bob(300,550,50,50);
	BOB2 = new Bob(350,550,50,50);
	BOB3 = new Bob(400,550,50,50);
	BOB4 = new Bob(450,550,50,50);
	BOB5 = new Bob(500,550,50,50);
	ROPE1 = new Rope(BOB1.body,ROOF.body,-50*2,0);
	ROPE2 = new Rope(BOB2.body,ROOF.body,-50*2,0);
	ROPE3 = new Rope(BOB3.body,ROOF.body,-50*2,0);
	ROPE4 = new Rope(BOB4.body,ROOF.body,-50*2,0);
	ROPE5 = new Rope(BOB5.body,ROOF.body,-50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ROOF.display();
  BOB1.display();
  BOB2.display();
  BOB3.display();
  BOB4.display();
  BOB5.display();
  ROPE1.display();
  ROPE2.display();
  ROPE3.display();
  ROPE4.display();
  ROPE5.display();
  
 
 
}




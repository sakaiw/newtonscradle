const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	//Create the Bodies Here.
	bobObject1 = new Bob(300);
	bobObject2 = new Bob(350);
	bobObject3 = new Bob(400);
	bobObject4 = new Bob(450);
	bobObject5 = new Bob(500);

	roof = new Roof(400,150,300,20);

	//rope1 = new Rope1(bobObject1.body, {x:300,y:150});
	rope1 = new Rope(bobObject1.body, roof.body, -100);
	rope2 = new Rope(bobObject2.body, roof.body,-50 );
	rope3 = new Rope(bobObject3.body, roof.body,0 );
	rope4 = new Rope(bobObject4.body, roof.body, 50);
	rope5 = new Rope(bobObject5.body, roof.body,100 );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});

	}
}
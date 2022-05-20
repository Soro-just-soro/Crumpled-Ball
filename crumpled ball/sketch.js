
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

	//Create the Bodies Here.
ball=new Ball(400,350,50)

G= new ground(width/2, 670, width, 20/*, -5*/) 
G.debug=true
T1=new target(675, 450, 10, 500)
T2=new target(750, 450, 10, 500)
Engine.run(engine);
W1=new ground(800, 350, 10, 700/*, 0*/)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
G.display();
W1.display();
T1.display();
T2.display();
drawSprites();
 
}

function keyPressed(){
	if(keyCode==32){
Matter.Body.applyForce(ball.body,ball.body.postition,{x:13,y:-45})
	}
}


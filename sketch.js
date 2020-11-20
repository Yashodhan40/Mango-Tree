
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stone1,ground,mango1,rope1,mango3,mango2;
var boy1,tree1,ground2;
function preload(){
	boy = loadImage("boy.png");
}
function setup() {
	createCanvas(1300, 600);
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(410,100,20,20);
	
	mango1 = new Mango(1100,100,30);
	rope1 = new Rope(stone1.body,{x:170,y:340});
	mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1110,140,30);
	mango4 = new Mango(1000,140,30);
	ground = new Ground(1,580,2000,10);
	ground2 = new Ground(400,580,2000,10);
	boy1= createSprite(270,460,30,30);
	boy1.addImage("b",boy);
	boy1.scale=0.2;
	mango5 = new Mango(1200,130,30);
	
	
	//tree1 = new Tree(1400,300);
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  Engine.update(engine);
  background(40,210,250);
  
  stone1.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope1.display();
  boy1.depth=stone1.depth;
  stone1.depth=stone1.depth+1;
 
  //tree1.display();
  ground2.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});

}
function mouseReleased(){
	rope1.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:105, y:370});
		//rope1.attach(stone1.body);
		 rope1.fly();
	}



}

function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false)
	}

}      





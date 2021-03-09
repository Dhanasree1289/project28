const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,box1,box2,box3,paper1

function preload()
{
	dustbinimage = loadImage('dustbin.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Dustbin(970,520,135,15);
	box2 = new Dustbin(1030,450,15,140);
	box3 = new Dustbin(920,450,15,140);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	Launcher= new Launcher(paper1.body,{x:200,y:100})
	
	 Engine.run(engine);
  
}


function draw() {
	background("pink");
	Engine.update(engine);
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(dustbinimage,900,380,150,150);
	paper1.display();
	Launcher.display();
 
}

	
	function mouseDragged(){
		Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
		}
		function mouseReleased(){
	    Launcher.fly()
		}



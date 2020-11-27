
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;

var engine,world;
var paper,d1,d2,d3,ground;

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	

	paper=new Paper(200, 450, 70);
	
	ground=new Ground(800, 690, 1600, 30);
	d1=new Dustbin(1000, 665);
	

	
/*	 var render=Render.create({
		
		element: document.body,
		engine: engine,
		options: {
		width: 1600,
		height: 700,
		wireframes:false
		}
	});

	Render.run(render); 
  */
}


function draw() {
	
  background("skyblue");
  Engine.update(engine);
  
  
  paper.display();
  ground.display();
  d1.display();
  
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}

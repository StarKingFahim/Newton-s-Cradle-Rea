
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;

var  bobDiameter=50;


function preload()
{
	
}

function setup() {
	canvas=createCanvas(800, 600);


    engine = Engine.create();
    world = engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
     canvasmouse.pixelRatio=pixelDensity();
     
     var options={
       mouse:canvasmouse
     }

     mConstraint=MouseConstraint.create(engine,options);
     World.add(world,mConstraint);

    bob1=new bob(300,350,50);
    bob2=new bob(350,350,50);
    bob3=new bob(400,350,50);
    bob4=new bob(450,350,50);
    bob5=new bob(500,350,50);
    roofs=new roof(400,100,300,40);
    ground=new roof(200,700,900,20);
    sling1=new Strings( bob1.body,roofs.body,bobDiameter*-2,0);
    sling2=new Strings( bob2.body,roofs.body,bobDiameter*-1,0);
    sling3=new Strings( bob3.body,roofs.body,bobDiameter*0,0);
    sling4=new Strings( bob4.body,roofs.body,bobDiameter*1,0);
    sling5=new Strings( bob5.body,roofs.body,bobDiameter*2,0);

	  Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  rectMode(CENTER);
  
 
  ground.display();

  sling1.display();

  sling2.display();
  sling3.display();

  sling4.display();
  sling5.display();

  bob1.display();
  bob2.display();

  bob3.display();
  bob4.display();

  bob5.display();

  roofs.display();
  
  drawSprites();
}














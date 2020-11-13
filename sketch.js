const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ball;
var ground1,ground2;
var slingshot;
var bgColor="white";

function setup(){
    var canvas = createCanvas(1200,550);
    getTime();
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(900,height,600,20);
    ground2 = new Ground(400, 50, 100, 20);
    box1 = new Box(700, 400, 70, 70);
    box2 = new Box(700, 300, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(700, 140, 70, 70);
    box5 = new Box(700, 70, 70, 70);
    box6 = new Box(920, 400, 70, 70);
    box7 = new Box(920, 330, 70, 70);
    box8 = new Box(920, 240, 70, 70);
    ball = new Ball(400, 300, 30);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:400, y:50});
}

function draw(){
    if (bgColor)
{
    background(bgColor);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground1.display();
    ground2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ball.display();    
    slingshot.display(); 
  }
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}

async function getTime()
{
    console.log("here");
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log("fetch");
    var rJSON = await response.json();
    console.log(rJSON);
    var dt = rJSON.datetime;
    console.log (dt);
    var hour = dt.slice(11,13);
    if(hour>=06&&hour<=18)
    {
        bgColor = "lightblue"
    }
    else
    {
        bgColor = "black"
    }
} 
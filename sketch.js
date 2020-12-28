//constant is used for creating a memory for physics commands
//engine refers to the object on which physics command are applied 
//matter refers to the library matter.js 
//world is for providing physical world to the obejcts
//bodies - for creating physical body for the object 
//constraint is the force which helps the object to come back to its original position 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

//giving stateStae on screen 
//giving image to background
//intial score on the screen
var gameState = "onSling";
var bg = "sprites/bg.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    //creating small object using the properties of the engine from matter.js
    engine = Engine.create();
    // creating the world for the object created 
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);    
        //
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
        //updating all the changes inside the object 
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    console.log(bird.body.speed);    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    //making the bird fly when streched and released from slingshot
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

//no merging with major data base 
async function getBackgroundImg(){
    //waiting for the response from the website for info 
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //Json is a format in which the website is written
    //taking the information in same format
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    //format of writting the time 
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
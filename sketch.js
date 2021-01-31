const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops=100;
var drops = [];
var image1, image2, image3, image4;
var umbrella;
var rand;
var thunder;
var thunderFrame=0;


function preload(){
image1 = loadImage("1.png");
image2 = loadImage("2.png");
image3 = loadImage("3.png");
image4 = loadImage("4.png");

}

function setup(){

  engine = Engine.create;
world = engine.world;

  createCanvas(400,700);

  umbrella = new Umbrella(200,500);

if(frameCount % 150===0){
  for(var i=0; i<maxDrops; i++){
    drops.push(new Drop(random(0,400), random(0,400)));
  }
}


    
}

function draw(){
    background("black");
    Engine.update(engine);
    rand = Math.round(random(1,4));
   if(frameCount % 80===0){
      thunderFrame = frameCount;
      thunder = createSprite(random(10,370), random(10,30),10,10);
      switch(rand){
        case 1 : thunder.addImage(image1);
        break;

        case 2 : thunder.addImage(image2);
        break;

        case 3 : thunder.addImage(image3);
        break;

        case 4 : thunder.addImage(image4);
        break;

      }
   }
   umbrella.display();
   for(i=0; i<maxDrops; i++){
drops[i].display;
drops[i].update;
   }
   if(thunderFrame+10===frameCount && thunder){
     thunder.destroy();

   }

    drawSprites();
}   


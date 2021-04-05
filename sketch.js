
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX=-4;
  console.log(ground.x)
  
  FoodGroup = createGroup();
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x=ground.width/2
  }
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  spawnbanana();
  
  
  drawSprites();
}

function spawnbanana(){
 if (frameCount % 60 === 0){
   var banana = createSprite(400,190,10,40);
   banana.velocityX = -6;
   banana.addImage("banana",bananaImage); 
   banana.scale = 0.1;
 }
   monkey.depth = monkey.depth + 1;
  
}
    





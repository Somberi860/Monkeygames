
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score 
var survivalTime = 0;
var END = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  survivalTime = 0;
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  

  
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :", + score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivialTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  
  
  if(obstacleGroup.isTouching(monkey)){
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    monkey.velocityY = 0;
    bananaGroup.destroyEach();
    
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
  }
  
  banana();
  obstacle();
  drawSprites();
}

function banana(){
  if(World.frameCount % 80 === 0){
    var banana = createSprite(600,200,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    //adding lifeTime to the banana
    banana.lifetime = 300;
    
    bananaGroup.add(banana);
  }
 }

function obstacle(){
  if(World.frameCount % 300 === 0){
    var obstacle = createSprite(400,316,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
    //adding lifeTime to the obstacle
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
  
}






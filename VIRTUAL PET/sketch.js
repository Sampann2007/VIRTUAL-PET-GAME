var dog,dogImg,happydogImg,foodS,foodStock;
function preload(){
  dogImg=loadImage("Images/Dog.png");
  happydogImg=loadImage("Images/happy dog.png");
}
function setup(){
  createCanvas(500,500);
  dog=createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;
  foodS=200;
}
function draw(){
  background("green");
  if(foodS!==0){
      if(keyDown(UP_ARROW)){
      dog.addImage(happydogImg);
    }
    if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImg);
      foodS=foodS-Math.round(random(1,2));
    }
    if(keyDown(DOWN_ARROW)){
      foodS=foodS+20;
    }
    textSize(20);
    fill(225);
    text("NOTE: PRESS UP DOWN TO FED DOG",50,50);
    text("FOOD REMAINING:" +foodS,150,150);
    
  }
  drawSprites();
}
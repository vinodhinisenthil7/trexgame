var trex,trex_running,trex_collided;
var ground,invisibleGround;

function preload()
{
  trex_running=loadAnimation("trex1","trex3","trex4");
  trex_collided=loadImage("trex_collided");
  
  
}

function setup() {
  createCanvas(400, 400);
  trex=createSprite(50,360,10,100);
  trex.setAnimation("running","trex_running");
}

function draw() {
  background(220);
  drawSprites();
}
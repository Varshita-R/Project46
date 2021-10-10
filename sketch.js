var jet;
var jetImg;
var bullet;
var bulletImg;
var dice;
var diceImg;

function preload(){
  jetImg = loadImage("Jet.png");
  bulletImg = loadImage("Bullet.png");
  diceImg = loadImage("Dice.png");
}

function setup() {
  createCanvas(800,600);

  jet = createSprite(400,500,50,50);
  jet.addImage("jetImg",jetImg);
  jet.scale = 0.3;

  edges = createEdgeSprites();
}

function draw() {
  background("#C8A2C8");  

  if(keyDown("LEFT_ARROW")){
    jet.x = jet.x-20;
  }

  if(keyDown("RIGHT_ARROW")){
    jet.x = jet.x+20;
  }

  jet.bounce(edges[0]);
  jet.bounce(edges[1]);

  if(keyDown("space")){
    bullet = createSprite(jet.x,500,10,10);
    bullet.addImage("bulletImg",bulletImg);
    bullet.scale = 0.1;
    bullet.velocityY = -5; 
  }

  spawnDice();

  drawSprites();
}

function spawnDice(){
  if(frameCount % 75 === 0){
  dice = createSprite(random(100,700),0,10,10);
  dice.addImage("diceImg",diceImg);
  dice.scale = 0.2;
  dice.velocityY = 2;
  dice.lifetime = 315;
  }
  
}
var bgImg;
var form;
var gameState = 0;

function preload()
{
bgImg = loadImage("Images/WEMBLEY.jpg")
}

function setup() 
{
  createCanvas(1200,800);
 
}

function draw() 
{
  background(bgImg);
  if(gameState === 0){
  form = new Form()
  form.display();}
  
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  
  
  drawSprites();
}


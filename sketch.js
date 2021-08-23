var fixedRect, movingRect;
var o1, o2, o3, o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(100, 100, 50, 50);
  o1.shapeColor="green";
  o2=createSprite(200, 100, 50, 50);
  o2.shapeColor="green";
  o3=createSprite(300, 100, 50, 50);
  o3.shapeColor="green";
  o4=createSprite(400, 100, 50, 50);
  o4.shapeColor="green";
  movingRect.velocityX=5;
  fixedRect.velocityX=-5;
}

function draw()
{
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
//isTouching(movingRect, o1);
 if(isTouching(movingRect, o4))
 {
    movingRect.shapeColor="blue";
    o4.shapeColor="blue";
 }
 else
 {
    movingRect.shapeColor="green";
    o4.shapeColor="green";
 }
  bounceoff(movingRect, fixedRect);
  drawSprites();
}


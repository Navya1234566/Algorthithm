var movingRectangle, fixedRectangle
function setup() {
  createCanvas(800,400);
  movingRectangle=createSprite(200,200,20,20)
  fixedRectangle=createSprite(200,200,50,50)
}

function draw() {
  background("Blue"); 
  movingRectangle.x=mouseX
movingRectangle.y=mouseY
if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
  fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
  movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2&&
  fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2 )
{
  movingRectangle.shapeColor="green"
  fixedRectangle.shapeColor="green"
}
else{movingRectangle.shapeColor="black"
fixedRectangle.shapeColor="black"}
  drawSprites();
}
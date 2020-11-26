var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

 thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,552)



  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="blue";
  wall.debug=true;
  
  bullet=createSprite(400,200,50,50);
  bullet.shapeColor="white";
   bullet.deburg=true;
   bullet.velocityX=speed;

}

function draw() {
  background("black");

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="yellow";
    }
  }
  
  
  
  drawSprites();

}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  walLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;


}

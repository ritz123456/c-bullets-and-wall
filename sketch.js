var bullet,wall;
var speed,weight;
var wall, thickness;
var bullet, speed;
var bullet, weight;
function setup() {
  createCanvas(1600,400);
  //createSprite(400,200,50,50);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  speed=random(223,321)
  bullet=createSprite(50,200,50,15);
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;
 
}

function draw() {
  background(0)
  if (wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
var bullet,wall,speed,weight,thickness



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
bullet.shapeColor="white"
thickness=random(22,83)
wall=createSprite(1200,200,thickness,200)
wall.shapeColor="grey"
speed=random(223,321)
weight=random(30,52)
bullet.velocityX=speed
}

function draw() {
  background(0,0,0);  
  if (wall.x-bullet.x<bullet.width/2+wall.width/2){
bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(deformation>10){
  bullet.shapeColor="red"
}
if(deformation<10){bullet.shapeColor="green"}


  }
  drawSprites();
}
var car,wall,speed,t,weight;

function setup() {
  speed=random(223,321);
  weight=random(30,52);
  t=random(22,83);
  createCanvas(1600,1600);
 wall=createSprite(1200, 200,t,height/2);
 car=createSprite(50,200,50,10);
 car.velocityX = speed;
 wall.shapeColor="grey";
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x <(car.width+wall.width)/2){
    car.velocityX=0;
    var de =0.5 * weight * speed* speed/(t*t*t);
    if(de>10){

      car.shapeColor="red";
    
    }
    
    if(de<10){
      car.shapeColor="green";
    }
  }

  drawSprites();
}
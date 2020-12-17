const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var score=0;
var divisionHeight=300;




function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
   
  ground = new Ground(width/2,height-10,width,20);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, (height-divisionHeight/2)+10, 10, divisionHeight-50));
   }
  for(var j =40 ;j<=width ; j=j+50){
    plinkos.push(new Plinko(j,height-(divisionHeight)));
  }
  for(var j =15 ;j<=width-20 ; j=j+50){
    plinkos.push(new Plinko(j,height-(divisionHeight+50)));
  }
  for(var j =40 ;j<=width ; j=j+50){
    plinkos.push(new Plinko(j,height-(divisionHeight+100)));
  }
  for(var j =15 ;j<=width-20 ; j=j+50){
    plinkos.push(new Plinko(j,height-(divisionHeight+150)));
  }  
  for(var j =40 ;j<=width ; j=j+50){
    plinkos.push(new Plinko(j,height-(divisionHeight+200)));
  }
  
}

function draw() {
  background(random(0)); 
  Engine.update(engine); 
  ground.display();
  fill(random(0,255),random(0,255),random(0,255));
  textSize(30)
  text("Score "+score,width-150,30)
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%30===0){
     particles.push(new Particle(random(width-30, width-(width-30)), 10,10));
    score++
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

  

  
}
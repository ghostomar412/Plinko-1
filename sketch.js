var engine
var world

var particle=[]
var plinko=[]

function setup() {
  createCanvas(800,800);
  engine = Matter.Engine.create();
  world=engine.world;
  ground = new Ground (400,400+400,800,10);
  division= new Ground (550,400+250,10,300);
  division2 = new Ground (250,400+250,10,300);
  division3 = new Ground (5,400+250,10,300);
  division4 = new Ground (795,400+250,10,300);
  for (var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for (var j=15;j<=width;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for (var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,275));
  }
  for (var j=15;j<=width;j=j+50){
    plinko.push(new Plinko(j,375));
  }
  for (var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,475));
  }
}


function draw() {
  background(56,197,243);  
  //spawnParticle()
  drawSprites();
  ground.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();
  

for (var i = 0; i < plinko.length; i++) {
     
  plinko[i].display();
  
}

for (var j = 0; j < particle.length; j++) {
   
  particle[j].display();
}
if(frameCount%60===0){
  particle.push(new Particle(random(width/2-30, width/2+30), 10));

}
}
//function spawnParticle(){
//if(frameCount%60===0){
  //particle.push(new Particle(random(width/2-10,width/2+10),10,10))
//}
 
//}
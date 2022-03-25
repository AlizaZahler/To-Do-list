// Subject Scholars
// Aliza Zahler
     
// Desc.   A simple day-to-night animation coded from p5.js to add a little bit 
//              of excitement to a otherwise simple and straightforward project

                                  //start code\\     
//_________________________________________________________________________________\\

//setup

let WIDTH;
function setup() {
  let canvas = createCanvas(windowWidth, 200);
  console.log(windowWidth)
  angleMode(DEGREES)
  rSize = random(50, 75);
  canvas.parent('p5-canvas')
  frameRate(30)
  } 
  WIDTH = window.innerWidth

function windowResized(){
  resizeCanvas(windowWidth,200)
  WIDTH = window.innerWidth
   radius = WIDTH+350
   X = WIDTH/2
   Y = radius/1.0111
}

//variables
let road;
let bus;
let car;
let taxi;
let truck;
let pickup;
let van;
let police;
let firetruck;
let sun;
let moon;
let cloud;

//movement
let busX = WIDTH/2.5;
let carX = WIDTH/2;
let taxiX = WIDTH/1.25;
let truckX = WIDTH/1.111111;
let pickupX = WIDTH/3.333333;
let vanX = WIDTH/10;
let policeX = WIDTH/2;
let firetruckX = WIDTH/20;
let sunX;
let sunY;
let moonX;
let moonY;
let cloudX = 0
let cloudX2 = 0

//clouds
let rSize;
let cloudOpacity = 0;

//booleans
let carBoolean = true
let truckBoolean = true
let taxiBoolean = true
let busBoolean =  true
let pickupBoolean = true
let vanBoolean = true
let policeBoolean = true
let firetruckBoolean = true
let sunBoolean = true
let moonBoolean = true
let nightBoolean = false
let dayBoolean = true

//circular-motion
let sunAngle = -182
let moonAngle = -250
let radius = WIDTH+10
let X = WIDTH/2
let Y = radius/1.0111
let dx;
let dy;

//lighting
let opacity = 0
let tintC = 0

//_________________________________________________________________________________\\

//functions

function preload() {
  road = loadImage('Road.png')
  bus = loadImage('Bus.PNG')
  pickup = loadImage('Pickup.png')
  car = loadImage('Car.PNG')
  van = loadImage('Van.png')
  taxi = loadImage('Taxi.PNG')
  truck = loadImage('Truck.PNG')
  police = loadImage('Police.png')
  firetruck = loadImage('Firetruck.png')
  sun = loadImage('Sun.PNG')
  moon = loadImage('Moon.PNG')
  cloud = loadImage('Cloud.png')
  }

function SunAndMoon() {
  //sun
 dx = radius * cos(sunAngle)
 dy = radius * sin(sunAngle)
 sunX = X + dx
 sunY = Y + dy
 strokeWeight(10)
 rectMode(CENTER);
 image(sun,sunX,sunY,50,50)
 rectMode(CORNER);
 
  //moon
 dx = radius * cos(moonAngle)
 dy = radius * sin(moonAngle)
 sunX = X + dx
 sunY = Y + dy
 moonX = sunX
 moonY = sunY
 rectMode(CENTER)
 image(moon,moonX,moonY,45,45);
 rectMode(CORNER)
 
 sunAngle += 0.5
 moonAngle += 0.5
 
 if(sunAngle > -55){
   nightBoolean = true
   sunAngle = -180
   cloudX=0
   cloudX2 = 0
   tintC=0
 }
 //console.log('SUN ' + sunAngle)
 //console.log('MOON ' + moonAngle);
 
 if(moonAngle > -55){
   dayBoolean = true
   moonAngle = -180}
  }

function DayAndNight() {
  //night
  stroke(0)
  strokeWeight(5)
  noStroke()
  if (nightBoolean==true){
   if(moonAngle > -130 && moonAngle < -110){
     opacity+=4
   }else if(moonAngle > -75 && moonAngle < -55){
      opacity-=4
    }else if(moonAngle > -110 && moonAngle < -92.5){
      opacity+=0.5
    }else if(moonAngle > -92.5 && moonAngle < -75){
      opacity -=0.5
    }
  
    fill(255,255,255,opacity+65)
    circle(WIDTH/2,100,5)
    circle(WIDTH/3.333333,50,6)
    circle(WIDTH/1.25,75,5)
    circle(WIDTH/2.5,63,4)
    circle(WIDTH/5,92,5)
    circle(WIDTH/1.0752,110,7)
    circle(WIDTH/1.5873,75,5)
    circle(WIDTH/1.3698,115,8)
    circle(WIDTH/10,35,5)
    circle(WIDTH/6.666666,93,3)
    circle(WIDTH/18.1818,81,6.5)
    fill(0,0,0,opacity)
    rect (0,0, width, 200)
    }
  
  //day
   if(dayBoolean == true && sunBoolean >-140){       
   if(sunAngle > -125 && sunAngle < -110)       
      {tintC+=5}
     else if(sunAngle > -90 && sunAngle < -55)
     {tintC-=3}
     else if(sunAngle > -110 && sunAngle < -100)
     {tintC+=0.5}
     else if(sunAngle > -100 && sunAngle < -90)
     {tintC -=0.5}
 }
}

function Cloud(){
    tint(255,tintC)
     image(cloud,cloudX+WIDTH/3.33333,75,72+10,50+10)
     image(cloud,cloudX+WIDTH/5,35,72-3,50-3);
     image(cloud,cloudX2-50.4081633,53,72-5,50-5);
     image(cloud,cloudX+WIDTH/2,72+6,50+8)
     image(cloud,cloudX2+WIDTH/1.5,72+10,50+10)
     image(cloud,cloudX+800,25,72+6,50+8)
     tint(255,255)
  cloudX++
  cloudX2+=1.5
  }

function Images() {
    //images
    image(road,0,100,WIDTH/2,100)
    image(road,WIDTH/2,100,WIDTH/2,100)
    image(taxi,taxiX,131);
    image(firetruck,firetruckX,90,115,115);
    image(police,policeX,104,108,108)
    image(bus,busX,123);
    image(truck,truckX,130);
    image(pickup,pickupX,118,95,95);
    image(van,vanX,142,70,70);
    image(car,carX,158);
  }

function Vehicles(){
    //car
    if(carBoolean == true){
      carX += 4.5}
    if(carX>WIDTH+100){
      carX = -180}
    
    //truck
    if(truckBoolean == true){
      truckX += 3.5}
    if(truckX>WIDTH + 100){
      truckX = -110}
    
    //taxi
    if(taxiBoolean == true){
      taxiX -= 4.2}
    if(taxiX< -100){
      taxiX = WIDTH+100}
    
    //bus
    if(busBoolean == true){
      busX -= 2.5}
    if(busX < -100){
      busX = WIDTH+100}
    
    //pickup
    if(pickupBoolean == true){
      pickupX += 6.5}
    if(pickupX > WIDTH + 100){
      pickupX = -500}
    
    //van
    if(vanBoolean == true){
      vanX += 5.6}
    if(vanX > WIDTH){
      vanX = -175}
    
     //police
    if(policeBoolean == true){
      policeX -= 5.45}
    if(policeX < -110){
      policeX = WIDTH+300}
    
    
     //firetruck
    if(firetruckBoolean == true){
      firetruckX -= 6}
    if(firetruckX < -110){
      firetruckX = WIDTH+100}
  }

function draw() {
    background(92,225,230);
    rectMode(CORNER);

    SunAndMoon();
    Cloud();
    Images();
    Vehicles();
    DayAndNight();
  }

//_________________________________________________________________________________\\
                                  //end code\\     
       

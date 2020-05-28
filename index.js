function setup() { 
    createCanvas(1200, 500);
  } 
let velocityX = 1;
let velocityY = 0;

let aX = 0.01;
let aY = 0;

let aCounter = 0;

let Rect = {
    positionX: 250,
    positionY: 450,
}
let Tgl = {
    positionXa: 900,
    positionYa: 470,
    positionXb: 910,
    positionYb: 450,
    positionXc: 920,
    positionYc: 470,
}

function draw() {
    background("#000000");
    rect(Rect.positionX,Rect.positionY,20,20);
    fill(250,250,250);
    triangle(Tgl.positionXa,Tgl.positionYa,Tgl.positionXb,Tgl.positionYb,Tgl.positionXc,Tgl.positionYc);
Tgl.positionXa += - velocityX
Tgl.positionXb += - velocityX
Tgl.positionXc += - velocityX
Tgl.positionYa += - velocityY
Tgl.positionYb += - velocityY
Tgl.positionYc += - velocityY

aCounter++;
if (aCounter >= 30) {
    velocityX += aX;
    velocityY += aY;
    aCounter = 0;



}
}

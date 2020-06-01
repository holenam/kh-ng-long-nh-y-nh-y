var velocityX = 3;
var velocityY = 0 ;
var yJump = 0;

var aX = 0.2;
var aY = 0;

var g = 10;
var aCounter = 0;

let Rect = {
    positionX: 150,
    positionY: 350,
}
let Obs = {
    positionX: 750,
    positionY: 350,
}



function setup() { 
    createCanvas(850, 450);
    
} 

function draw() {

background(100,100,100);
stroke(200);
line(0,370,850,370);
rect(Rect.positionX,Rect.positionY,20,20);
fill(250,250,250);
rect(Obs.positionX,Obs.positionY,20,20);

Jump();

aCounter++;
if (aCounter >= 30) {
    velocityX += aX;
    aCounter = 0;
}

Obs.positionX -= velocityX;
function Jump() {
    if (Rect.positionY + 20 < 360) {
        yJump += 1;
        onGround = false;
    } else {
        yJump = 0;
        onGround = true;
    }

    Rect.positionY += yJump;

    if (keyIsDown(ENTER)) {
        if (onGround) {
            yJump -= 10;
            onGround = false;
        }
    }
    Rect.positionY += yJump;
}

if (dist(Rect.positionX, Rect.positionY, Obs.positionX, Obs.positionY) < 20){
    
}
}

    




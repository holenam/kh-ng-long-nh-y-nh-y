var velocityX = 3;
var velocityY = 0 ;
var yJump = 0;

var aX = 0.2;
var aY = 0;

var aCounter = 0;

var Score = 0;
var scoreMultiplier=1
var Rect = {
    positionX: 150,
    positionY: 350,
}
var Obs ={
    positionX: 850,
    positionY: 350,
}
death=false

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
stop();
reset();
aCounter++;
if (aCounter >= 30) {
    velocityX += aX;
    aCounter = 0;
    if (velocityX>=20){
        velocityX=20
    }
}

Obs.positionX -= velocityX;
if (Obs.positionX<-20) {
Obs.positionX=850
}
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

function stop() {
if (dist(Rect.positionX, Rect.positionY, Obs.positionX, Obs.positionY) < 20){
    velocityX = velocityY = yJump = aX = aY =0;
    textAlign(CENTER);
    textSize(25);
    text("GAME OVER", 850/2, 450/2);
    textSize(15);
    text("Press F5 to restart", 850/2, 450/2.4);
    scoreMultiplier=0;
    death= true
}}

function reset() { if(death==true){
velocityX = 3;
velocityY = 0 ;
yJump = 0;

aX = 0.2;
aY = 0;

aCounter = 0;

Score = 0;
scoreMultiplier=1
Rect = {
    positionX: 150,
    positionY: 350,
}
Obs = {
    positionX: 750,
    positionY: 350,
}
death=false
}
}
Score +=scoreMultiplier;
textSize(15);
text("SCORE :  " +  Score, 850/2, 20);

}
death = false;
tutorial = true;
var velocityX = 5;
var velocityY = 0;
var yJump = 0;

var aX = 0.2;
var aY = 0;

var aCounter = 0;

var Score = 0;
var scoreMultiplier = velocityX / 50;
var highScore = 0;
var Rect = {
  positionX: 150,
  positionY: 350,
};
var Obs = {
  positionX: 900,
  positionY: 370,
  height: 20,
};
var mObs = {
  positionX: 900,
  positionY: 370,
  height: 20,
};

k = Math.floor(Math.random() * 400 + 200);
function reset() {
  velocityX = 5;
  velocityY = 0;
  yJump = 0;

  aX = 0.2;
  aY = 0;

  aCounter = 0;

  Score = 0;
  scoreMultiplier = velocityX / 50;
  Rect = {
    positionX: 150,
    positionY: 350,
  };
  Obs = {
    positionX: 900,
    positionY: 370,
    height: 20,
  };
  mObs = {
    positionX: 900,
    positionY: 370,
    height: 20,
  };
  death = false;
  tutorial = true;
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

  if (keyIsDown(32)) {
    if (onGround) {
      yJump -= 10;
      onGround = false;
    }
  }
  Rect.positionY += yJump;
}
function stop() {
  if (
    (Math.abs(Rect.positionX - Obs.positionX) < 20) &
      (Math.abs(Rect.positionY - Obs.positionY) < Obs.height + 20) ||
    (Math.abs(Rect.positionX - mObs.positionX) < 20) &
      (Math.abs(Rect.positionY - mObs.positionY) < mObs.height + 20)
  ) {
    velocityX = velocityY = yJump = aX = aY = 0;
    textAlign(CENTER);
    textSize(25);
    text("GAME OVER", 850 / 2, 450 / 2);
    textSize(15);
    text("Press SPACE to restart", 850 / 2, 450 / 2.4);
    scoreMultiplier = 0;
    death = true;
    tutorial = false;
    if (highScore < Score) {
      highScore = Score;
    }
  }
}
let img 
function preload() {
  img = loadImage('https://wallup.net/wp-content/uploads/2017/11/22/329814-jjying-low_poly-748x468.jpg')
}

function setup() {
  var canvas = createCanvas(850, 450);
  canvas.parent('canvas-holder')
}

// let Img
// function preload() {
//   Img = loadImage('D:/[Official]DOWNLOAD/creation-20200617T084247Z-001/creation/dino-pixilart (Copy).jpg')
// }

function draw() {
  // Obs(Img)
  background(img)
  stroke(200);
  line(0, 370, 850, 370);
  rect(Rect.positionX, Rect.positionY, 20, 20);
  fill(250, 250, 250);
  rect(Obs.positionX, Obs.positionY - Obs.height, 20, Obs.height);
  rect(mObs.positionX, mObs.positionY - mObs.height, 20, mObs.height);
  if (Score > 20) {
    tutorial = false;
  }
  if (tutorial) {
    text(15);
    text("Press SPACE to jump over obstacle", 850 / 2, 450 / 2.4);
  }
  if (death == false) {
    Jump();
  }
  aCounter++;
  if (aCounter >= 60) {
    velocityX += aX;
    aCounter = 0;
    if (velocityX >= 20) {
      velocityX = 20;
    }
  }
  scoreMultiplier = velocityX / 50;
  Obs.positionX -= velocityX;
  mObs.positionX -= velocityX;
  if ((Obs.positionX < -20) & (mObs.positionX < k)) {
    Obs.positionX = 900;
    k = Math.floor(Math.random() * 400 + 200);
    Obs.height = Math.floor(Math.random() * velocityX * 2 + velocityX * 1.5);
  }
  if ((mObs.positionX < -20) & (Obs.positionX < k)) {
    mObs.positionX = 900;
    k = Math.floor(Math.random() * 400 + 200);
    mObs.height = Math.floor(Math.random() * velocityX * 2 + velocityX* 1.5);
  }
  Score += scoreMultiplier;
  textSize(15);
  text("SCORE :  " + Math.floor(Score), 850 / 2, 20);
  textSize(15);
  text("HIGH SCORE :  " + Math.floor(highScore), 600, 20);
  stop();
  if (death & keyIsDown(32)) {
    setTimeout(reset, 200);
  }
}
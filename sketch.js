function setup() { 
    createCanvas(1200, 500);
    background(200,200,200);
  } 
  
function draw() {
  background("#000000");

  let a = 250;
  let b = 450;
  fill(20,150,250);
  rect(a,b,20,20);
  let move = frameCount;
  fill(250,250,250);
  triangle(900 - move, 470, 910 - move, 450, 920 - move, 470);
}

setup()
draw()

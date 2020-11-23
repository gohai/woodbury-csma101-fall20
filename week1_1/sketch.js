let presY = 380;
let presYSpeed = 0;

function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  if (key == " ") {
    presYSpeed = -5;
  }
}

function draw() {
  background(220);
  
  ellipse(300, presY, 40, 40);
  presY = presY + presYSpeed;
  if (presY > 380) {
    presY = 380;
  }
  presYSpeed = presYSpeed +0.1;
}
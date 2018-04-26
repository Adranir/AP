var img;


function preload() {
  img = loadImage('image/AP.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(10);
  rect(0, 15, 10, 10);
  textSize(32);
  textAlign(CENTER);
  text('color', (width / 2), (height / 2));
}

function draw() {

}

function mouseClicked() {
  if (mouseX < 10 && mouseY < 25 && mouseY > 15) {
    background(255);
    imageMode(CENTER);
    image(img, width / 2, height / 2);
  }

}

//...io/cube
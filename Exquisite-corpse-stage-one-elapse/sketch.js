let img = [];
let flower, sand;

function preload() {
  flower = loadImage('images/images.jpeg');
  sand = loadImage('images/Unknown.jpeg');
}

function setup() {
  createCanvas(500, 500);
  background(0);
  

  frameRate(100);
  img.push(flower);
  img.push(sand);


 
}

function draw() {

  let x = random(flower. width);
  let y = random(flower. height);
  let f = flower. get(int(x), int(y));
  fill(f);
  noStroke();
  circle(x, y, 300);
  square(x, y, 5);
  frameRate(50);
  

  let m = random(sand. width);
  let n = random(sand. height);
  let s = sand. get(int(m), int(n));
  fill(s);
  noStroke();
  circle(m + 140, n + 150, 500);
  square(m, n, 10);

  let r = random(img)
  image(r, 100, 100);
  tint(255, 180, 100)

}

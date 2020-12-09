let articleLines;
let img;
let pics = [];
let bubbles = [];
let song;
let button;

function preload() {
  articleLines = loadStrings('Article1text2.txt');
  img = loadImage('Article1_image.jpg');
  for (let i =0; i < 2; i++){
    pics[i] = loadImage('tshirts/tshirt'+ i + '.jpg');
  }
}
function setup() {
  createCanvas(1200, 800);
  for (let i = 0; i <10; i++) {
    let x = random(width);
    let y = random(height);
    //size
    let r = random(10, 150);
    let pic = random (pics);
    let b = new Bubble(x, y, r, pic);
    bubbles.push(b);
  }
  song = loadSound("Article1.mp3", loaded);
  button = createButton("start");
  button.mousePressed(togglePlaying);
}
function mousePressed(){
    for (let i = 0; i <bubbles.length; i++) {
      bubbles[i].clicked(mouseX, mouseY);
    }
  }

function draw() {
  background(50);
  textSize(16);
  for (let i = 0; i < 3; i++) {
    fill(100+(i*40));
    text(articleLines[i], 50, 50+i*100, 600);
  }
  if (keyIsPressed === true) {
    shuffle(articleLines, true);
  }
  for (let i=0; i <bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}
class Bubble {
  constructor(x, y, r, picshirt){
    this.x = x;
    this.y = y;
    this.r = r;
    this.pic = picshirt;
  }
  clicked(px, py){
    //collision det
    if (px < this.x && px < this.x + this.r && py > this.y && py < this.y + this.r){
      this.pic = img;//random(pics);
    }
  }

  move(){
    this.x = this.x + random(-1, 2);
    this.y = this.y + random(-1, 2);
  }
  show(){
    image(this.pic, this.x, this.y, this.r, this. r);
    fill(100, 200, 100);
  }
}
function togglePlaying(){
  if (! song.isPlaying()){
  song.play();
  song.setVolume(10);
  button.html("stop");
} else {
    song.pause();
    button.html("listen");
  }
}
function loaded(){
  song.play();
}

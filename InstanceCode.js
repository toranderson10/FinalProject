// var myp5 = new p5(sketch);

var sketch = function (p){


}

var x = 100;
var y = 100;

function setup(){
  createCanvas(200,200);
  background(51);
}

function draw(){
  fill(255, 0, 200, 25);
  noStroke();
  ellipse(x, y, 48, 48);

  x = x + random (-10, 10);
  y = y + random (-10, 10);
}
var myp5 = new p5(sketch);

let articles;
let x = 100;
let y = 100;
let button1, button2, button3, button4, button5;

let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=human%20rights%2C%20fashion&"


function setup() {
  createCanvas(windowWidth,windowHeight);
  loadJSON(url, gotData);
  //make the buttons
  //button 1
  button1 = createButton('read more');
  button1.position(100, 140);
  button1.mousePressed(changePage1);
  //button 2
  button2 = createButton('read more');
  button2.position(100, 240);
  button2.mousePressed(changePage2);
  //button 3
  button3 = createButton('read more');
  button3.position(100, 340);
  button3.mousePressed(changePage3);
  //button 4
  button4 = createButton('read more');
  button4.position(100, 440);
  button4.mousePressed(changePage4);
  //button 5
  // button5 = createButton('read more');
  // button5.position(100, 540);
  // button5.mousePressed(changePage5);
}


function gotData(result){
articles = result.response;
articleSummary = result.response.docs.abstract;
  console.log(result);
}

function draw(){
background(200);
if (articles){  //titles of pages
    //first article
    textAlign(LEFT);
    textSize(20);
    text(articles.docs[0].headline.main, x, y);
    textSize(12);
    text(articles.docs[0].abstract, x, y + 20);

    textSize(20);
    text(articles.docs[1].headline.main, x, y + 100);
    textSize(12);
    text(articles.docs[1].abstract, x, y + 120);

    textSize(20);
    text(articles.docs[4].headline.main, x, y + 200);
    textSize(12);
    text(articles.docs[4].abstract, x, y + 220);

    textSize(20);
    text(articles.docs[7].headline.main, x, y + 300);
    textSize(12);
    text(articles.docs[7].abstract, x, y + 320);

    // textSize(20);
    // text(articles.docs[5].headline.main, x, y + 400);
    // textSize(12);
    // text(articles.docs[5].abstract, x, y + 420);


// button from clickable library
  // myButton = new Clickable();     //Create button
  // myButton.locate(10, 10);
  // myButton.draw();       //Position Button
  // myButton.onPress = function(){  //When myButton is pressed
  //   this.color = "#AAAAFF";
  // this.width = 10;
  // this.height = 100;    //Change button color
  // alert("Yay!");                //Show an alert message
  //   }
  }
}

function changePage1() {
  window.location.replace("http://localhost:8000/page1.html"); 
}
function changePage2() {
  window.location.replace("http://localhost:8000/page2.html"); 
}
function changePage3() {
  window.location.replace("http://localhost:8000/page3.html"); 
}
function changePage4() {
  window.location.replace("http://localhost:8000/page4.html"); 
}
// function changePage5() {
//   window.location.replace("http://localhost:8000/page5.html"); 
// }

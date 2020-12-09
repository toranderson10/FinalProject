let players = [];
let myPlayer;
let x;
let y;
let img;



class Player {
constructor(data) {
this.firstName = data.first_name;
this.lastName = data.last_name;
this.teamName = data.team.full_name;
this.position = data.position;
}
}

class Jabari extends Player{
constructor(data){
super(data);
this.firstName = data.first_name[2];
this.lastName = data.last_name[2];
this.teamName = data.team.full_name[2];
this.position = data.position[2];
}
}

class Player3 extends Player{
constructor(data){
super(data);
this.firstName = data.first_name[3];
this.lastName = data.last_name[3];
this.teamName = data.team.full_name[3];
this.position = data.position[3];
}
}


function setup() {
    httpGet("https://enviro.epa.gov/enviro/efservice/tri_facility/state_abbr/VA/rows/499:504", 'json', myCallback);
    createCanvas(1400, 600);
    background(249, 224, 205);
    // img = loadImage('finalbasket.jpeg')
  }

  function myCallback(result) {
      for (let i = 0; i < 6; i++) {
      players.push(new Player(result.data[i + 1]));
      print(players);
                  }
       draw();
    }


function draw() {
    background(249, 224, 205);
    fill(100, 102, 153);
    textSize(20);
    textFont('TimesNewRoman');
    text('as they say:', 10, 20);
    text('ball dont lie',10, 40);

    fill(100,300,200);
    textSize(15);
    textFont('TimesNewRoman');
    textSize(10);
    fill(100,200,300);
    text('find your playerz position!', 10, 135);
    textSize(18);
    fill(100,400,100);
    text('key', 10, 150);
    textSize(14);
    fill(2);
    noStroke();
    text('F = forward', 10, 170);
    text('G = guard', 10, 185);
    text('C = center', 10, 200);
    text('PG = point guard', 10, 215);
    // image(img, 800, 120);

      //build the grid
for (let z = 0; z < width; z += width / 10) {
for (let m = 0; m < height; m += height / 5) {
stroke(0);
strokeWeight(1);
line(z, 0, z, height);
line(0, m, width, m);
}
    }

textH = 20
textSize(textH);

fill(0,107,182);
text(players[0].firstName + " " + players[0].lastName, 282, 125, 140, 120);
text(players[0].teamName, 282, 150, 140, 120);
fill(0,122,51);
text(players[1].firstName + " " + players[1].lastName, 422, 125, 140, 120);
text(players[1].teamName, 422, 150, 140, 120);
fill(93,118,169);
text(players[2].firstName + " " + players[2].lastName, 562, 125, 140, 120);
text(players[2].teamName, 562, 175, 140, 120);
fill(206,17,65);
text(players[3].firstName + " " + players[3].lastName, 282, 242, 140, 120);
text(players[3].teamName, 282, 270, 140, 120);
fill(93,118,169);
text(players[4].firstName + " " + players[4].lastName, 422, 242, 140, 120);
text(players[4].teamName, 422, 270, 140, 120);
fill(239,59,36);
text(players[5].firstName + " " + players[5].lastName, 562, 242, 140, 120);
text(players[5].teamName, 562, 270, 140, 120);
showPosition();
}

function showPosition(){
}
// text(players[2].lastName, 300, 135);

// if (x >= 282 && y >= 135){
//   text(players[2].firstName, 232, 135)
//   text(players[2].lastName, 272, 135)
//   textSize(textH);
// }
// if (x >= 282 && y >= 135){
//   text(players[3].firstName, 232, 135)
//   text(players[3].lastName, 272, 135)
//   textSize(textH);

// for (let Jabari of players){
// }
//   if (x >= 420){
//     text(Jabari.firstName, 421, 135)
//     textSize(textH);
//   }
//   if (y >=135){
//     text(Jabari.lastName, 460, 135)
//     textSize(textH);
//   }
// }


// text(player.firstName,x, y)
// text(player.lastName, x + 40, y);
// textSize(textH);

// players.forEach(player => text(player.firstName, 20, 100));


// for (let Player3 of players){
//  text(Player3.firstName, 560, y)
//  text(Player3.lastName, 560 + 40, y)


// this is the source code

// Object Communication Part 2
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.7-object-communication-2.html
// https://youtu.be/5Q9cA0REztY
// https://editor.p5js.org/codingtrain/sketches/7SjPmXN2

let images = [];
var count1 = 0;
var count2 = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p13/bg.png'); // 加载图像
    deco1 = loadImage('p13/deco1.png');
    deco2 = loadImage('p13/deco2.png');
    deco3 = loadImage('p13/deco1.png');
    deco4 = loadImage('p13/deco2.png');
    arrowImg = loadImage("p0/cursor.png");
    images = [deco1, deco2];
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);

    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800\
    imageMode(CENTER);
    image(deco1, 700+ random(-1,1), 850+random(-1,2));
    image(deco2, 1400+ random(-1,1), 850 + random(-1,2));

    if (mouseIsPressed === true) {
        let d1 = dist(mouseX, mouseY, 700, 850)
        if  (d1 < 100){
            deco1 = deco4;
        }
        let d2 = dist(mouseX, mouseY, 1400, 850)
        if (d2 < 100){
            deco2 = deco3;
        }
    }
    noTint();
    image(arrowImg, mouseX, mouseY);

}

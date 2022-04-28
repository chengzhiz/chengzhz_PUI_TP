var img;

var ratio;
let decos = [];


let x1 = 100;
let y1 = 100;
let x1speed = -9;
let y1speed = 8;

let x2 = 200;
let y2 = 500;
let x2speed = -6;
let y2speed = -8;

let x3 = 1000;
let y3 = 500;
let x3speed = 7;
let y3speed = 8;

let x4 = 300;
let y4 = 500;
let x4speed = 8;
let y4speed = 4;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p6/bg.png'); // 加载图像
    deco1 = loadImage('p6/deco1.png');
    deco2 = loadImage('p6/deco2.png');
    deco3 = loadImage('p6/deco3.png');
    deco4 = loadImage('p6/deco4.png');
    arrowImg = loadImage("p0/cursor.png");
    imageMode(CENTER);

}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    image(bg, windowWidth/2, windowHeight/2); //400 800

    x1 += x1speed;
    y1 += y1speed;
    if (x1 > windowWidth || x1 < 0) {
        x1speed = -x1speed;
    }
    if (y1 > windowHeight || y1 < 0) {
        y1speed = -y1speed;
    }

    x2 += x2speed;
    y2 += y2speed;
    if (x2 > windowWidth || x2 < 0) {
        x2speed = -x2speed;
    }
    if (y2 > windowHeight || y2 < 0) {
        y2speed = -y2speed;
    }

    x3 += x3speed;
    y3 += y3speed;

    if (x3 > windowWidth || x3 < 50) {
        x3speed = -x3speed;
    }
    if (y3 > windowHeight || y3 < 50) {
        y3speed = -y3speed;
    }

    x4 += x4speed;
    y4 += y4speed;

    if (x4 > windowWidth || x4 < 50) {
        x4speed = -x4speed;
    }
    if (y4 > windowHeight || y4 < 50) {
        y4speed = -y4speed;
    }

    image(deco1, x1 , y1 ); //400 800
    image(deco2, x2, y2); //400 800
    image(deco3, x3, y3); //400 800
    image(deco4, x4, y4); //400 800
    image(arrowImg, mouseX, mouseY);
}



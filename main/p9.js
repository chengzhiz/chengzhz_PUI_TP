var img;
let x1, y1, x2, y2, y3, y4;
var ratio;
let speed1 = 9;
let speed2 = 8;
let speed3 = 4;
let speed4 = 5;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p9/bg.png'); // 加载图像
    deco1 = loadImage('p9/deco2.png');
    deco2 = loadImage('p9/deco1.png');
    x1 = 1300;
    y1 = 400;
    y3 = 460;
    x2 = 1400;
    y2 = 430;
    y4 = 460;
    arrowImg = loadImage("p0/cursor.png");
    // front.resize(120,320);
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);

    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    imageMode(CENTER);
    image(deco1, x1 , y1); //400 800
    image(deco2, x2 , y2); //400 800
    image(deco1, x1 + 340 , y3); //400 800
    image(deco2, x2 + 340 , y4); //400 800
    y1 -= speed1; // 9
    y2 -= speed2;//8
    y3 -= speed3; //4
    y4 -= speed4; // 5
    if (y1 < 0){
        y1 = 400;
    }
    if (y2 < 0){
        y2 = 430;
    }
    if (y3 < 0){
        y3 = 430;
    }
    if (y4 < 0){
        y4 = 460;
    }
    if ((mouseX< 700) || (mouseY< 200) || (mouseY > 900)){
        speed1 = 1.9;
        speed2 = 1.8;
        speed3 = 1.4;
        speed4 = 1.5;
    }
    else {
        speed1 = 9;
        speed2 = 8;
        speed3 = 4;
        speed4 = 5;

    }

    image(arrowImg, mouseX, mouseY);

    // x = x + random(-1,1);
    // y = y + random(-1,1);
    // let angle1 = radians(45);
    // rotate(angle1);
    // angleRotate += 0.25;
    // reach 400 and 800 for each image

    // fill(255, 255, 255);
    // stroke(255, 255, 255);
    // rect(200, 380, 1600, 560);
    //
    // image(left, 80 + s, 360); //400 800
    // image(right, 1600 - 2 * s, 360);
}



var img;
let x, y;
var ratio;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p3/bg.png'); // 加载图像
    front = loadImage('p3/object.png');
    x = 0.3 * windowWidth;
    y = 0.7 * windowHeight;
    front.resize(120 * 1220 / windowWidth,320 * 1980/ windowHeight);
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    var ratio = map(mouseX, 0, windowWidth, 0.8, 1.15);
    if (ratio > 1.1){
        ratio = 1.15
    }
    if (ratio < 0.9){
        ratio = 0.9
    }
    imageMode(CENTER);
    image(front, x, y, ratio * windowWidth/4, ratio * windowHeight/4); //400 800
    image(arrowImg, mouseX, mouseY);

    x = x + random(-1,1);
    y = y + random(-1,1);
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



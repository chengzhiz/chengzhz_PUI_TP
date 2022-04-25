var img;
let x, y;
var ratio;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p8/bg.png'); // 加载图像
    front = loadImage('p8/deco.png');
    x = 500;
    y = 800;
    front.resize(120,320);
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);

    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    var ratio = map(mouseX, 0, windowWidth, 0.3, 0.6);
    imageMode(CENTER);
    image(front, 600,760, ratio * windowWidth/3, ratio * windowHeight/(2)); //400 800
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



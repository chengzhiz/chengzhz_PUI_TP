var img;
let x = 0;
var ratio;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p11/bg.png'); // 加载图像
    deco1 = loadImage('p11/deco1.png');
    deco2 = loadImage('p11/deco2.png');
    deco3 = loadImage('p11/deco3.png');

    arrowImg = loadImage("p0/cursor.png");
    // front.resize(120,320);
    // arrowImg = loadImage("p10/deco2.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);
    imageMode(CENTER);
    x = ratio;
    translate (1020, 1000);
    rotate(x);
    image(deco3, 0 ,0); //400 800
    translate (-1020, -1020);

    image(arrowImg, mouseX, mouseY);

    // translate(-890,-975);
    // translate (200, 0);
    // rotate(x);
    // image(deco2, 0,0); //400 800


    // image(arrowImg, mouseX, mouseY);
}



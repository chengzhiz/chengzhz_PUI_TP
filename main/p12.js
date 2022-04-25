var img;
let x = 0;
var ratio;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p12/bg.png'); // 加载图像
    deco1 = loadImage('p12/deco1.png');
    deco2 = loadImage('p12/deco2.png');
    arrowImg = loadImage("p0/cursor.png");

    // front.resize(120,320);
    // arrowImg = loadImage("p10/deco2.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800

    // var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);
    tint(255, map(mouseX, 1100, 1300, 0, 255));
    image(deco1, 1100, 200); //400 800
    image(deco2, 1100, 380); //400 800
    tint(255, map(mouseX, 1300, 1500, 0, 255));
    image(deco1, 1300, 200); //400 800
    image(deco2, 1300, 380); //400 800
    tint(255, map(mouseX, 1500, 1700, 0, 255));
    image(deco1, 1500, 200); //400 800
    image(deco2, 1500, 380); //400 800
    noTint();
    image(arrowImg, mouseX, mouseY);



    // translate (1020, 1000);
    // rotate(x);
    // image(deco3, 0 ,0); //400 800

    // translate(-890,-975);
    // translate (200, 0);
    // rotate(x);
    // image(deco2, 0,0); //400 800


    // image(arrowImg, mouseX, mouseY);
}



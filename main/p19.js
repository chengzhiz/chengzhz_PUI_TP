
var i = 0;
var angle = 0;
var ratio;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p19/bg.png'); // 加载图像
    deco = loadImage('p19/deco.png');

    arrowImg = loadImage("p15/cursor.png");
    // front.resize(120,320);
    // arrowImg = loadImage("p10/deco2.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    image(bg, 0, 0, windowWidth, windowHeight); // 完全不透明
    ratio = map(mouseX, 0, windowWidth, 0, 255)
    tint(255, ratio);
    if (ratio < 130){
        ratio = 0;
    }
    if (ratio > 170){
        ratio = 255;
    }
    image(deco, 0, 0, windowWidth, windowHeight);

    tint(255, 255);
    image(arrowImg, mouseX, mouseY);

}



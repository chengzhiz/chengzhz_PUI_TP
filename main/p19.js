var i = 0;
var angle = 0;
var ratio;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p19/bg.png');
    deco = loadImage('p19/deco.png'); // the answers
    arrowImg = loadImage("p15/cursor.png");

}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    image(bg, 0, 0, windowWidth, windowHeight);
    ratio = map(mouseX, 0, windowWidth, 0, 255)
    // mapping the mouse to the transparency ratio
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



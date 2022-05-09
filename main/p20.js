var i = 0;
var angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p20/bg.png');
    arrowImg = loadImage("p15/cursor.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    tint(255, 200);
    // the decoration image
    image(bg, 0, 0, windowWidth, windowHeight);

}



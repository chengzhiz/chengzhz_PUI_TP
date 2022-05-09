var img;
let x, y;
var ratio;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p8/bg.png');
    // the muscle
    front = loadImage('p8/deco.png');
    x = 500;
    y = 800;
    front.resize(120,320);
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    var ratio = map(mouseX, 0, windowWidth, 0.2, 0.7);
    if (ratio < 0.4) {
        ratio = 0.4;
    }
    if (ratio > 0.6) {
        ratio = 0.6;
    }
    imageMode(CENTER);
    push();
    // the muscle
    image(front,600 *windowWidth/1980, 780 * windowHeight/ 1220, ratio * windowWidth/3, ratio * windowHeight/2);
    pop();
    image(arrowImg, mouseX, mouseY);
}



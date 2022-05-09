var img;
let x, y;
var ratio;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p3/bg.png');
    front = loadImage('p3/object.png');
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    x = 0.3 * windowWidth;
    y = 0.7 * windowHeight;
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    var ratio = map(mouseX, 0, windowWidth, 0.8, 1.15);
    if (ratio > 1.1){
        ratio = 1.15
    }
    if (ratio < 0.9){
        ratio = 0.9
    }
    imageMode(CENTER);
    x = x + random(-1,1);
    y = y + random(-1,1);
// using random for the shaking effect
    image(front, x, y, ratio * windowWidth/4, ratio * windowHeight/4);
    image(arrowImg, mouseX, mouseY);

}



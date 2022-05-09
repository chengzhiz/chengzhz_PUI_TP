var img;
let x = 0;
var ratio;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p11/bg.png');
    deco1 = loadImage('p11/deco1.png');
    deco2 = loadImage('p11/deco2.png');
    deco3 = loadImage('p11/deco3.png');
    arrowImg = loadImage("p0/cursor.png");

}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    image(arrowImg, mouseX, mouseY);
    var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);
    imageMode(CENTER);
    x = ratio;
    translate (900 * windowWidth/2045, 1000 * windowHeight/1220);
    // the rotating eyes
    rotate(x);
    image(deco1, 0 ,0, windowWidth/10, windowHeight/10);
    // the rotating eyes
    rotate(-x);
    translate (windowWidth * 220/ 2045, 0);
    rotate(x);
    image(deco2, 0 ,0,windowWidth/10, windowHeight/10);
}



var i = 0;
var angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p7/bg.png');
    // the " thinking " blinking effect
    deco = loadImage('p7/deco.png');
    arrowImg = loadImage("p7/cursor.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    imageMode(CENTER);
    image(arrowImg, mouseX, mouseY);
    tint(255, i);
    // the " thinking " blinking effect
    image(deco, 540* windowWidth/2045, 460* windowHeight/1220, windowWidth/5, windowHeight/7);
    i += 20;
    if (i > 255){
        i = 0;
    }
}



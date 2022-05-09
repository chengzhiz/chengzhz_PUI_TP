var i = 20;
var angle = 0;

function setup() {

    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p18/bg.png');
    deco = loadImage('p18/deco.png');
    arrowImg = loadImage("p15/cursor.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    imageMode(CENTER);
    image(deco, windowWidth/2, windowHeight/2,windowWidth/6, windowHeight/2);
    tint(255, 10);
    imageMode(CORNER);
    tint(255, i);
    image(bg, 0, 0, windowWidth, windowHeight);
    tint(255, 255);
    image(arrowImg, mouseX, mouseY);
}

// click the mouse to make it show
function mousePressed() {
    if (i < 250){
        i += 20;
    }
    if (i > 250){
        i = 20;
    }
}



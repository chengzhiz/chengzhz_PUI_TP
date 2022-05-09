var i = 0;
var angle = 0;

function setup() {

    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p15/bg.png');
    deco = loadImage('p15/deco.png');
    deco2 = loadImage("p15/deco2.png");
    deco3 = loadImage("p15/deco3.png");
    arrowImg = loadImage("p15/cursor.png");
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
    image(deco, 1170* windowWidth/2045, 460* windowHeight/1220, windowWidth/3, windowHeight/3);
    deco.resize(580,400);
    // the blinking one
    i += 15;
    if (i > 255){
        i = 0;
    }
    noTint();
    imageMode(CENTER);
    translate(1630* windowWidth/2045, 440* windowHeight/1220)
    rotate(angle);
    angle += 0.01;
    // the rotating one
    image(deco2, 0, 0, windowWidth/6, windowHeight/5);


}



var ratio;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p5/bg.png');
    front = loadImage('p5/deco.png'); // the brain
    front.resize(120,320);
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    // for the resizing effect
    var ratio = map(mouseX, 0, windowWidth, 1.2, 2.16);
    if (ratio < 1.3){
        ratio = 1.2;
    }
    // for the snapping effect of the brain
    if (ratio > 2){
        ratio = 2.15;
    }
    imageMode(CENTER);
    image(front, windowWidth/2+18, windowHeight/2+4, ratio * windowWidth/3.1, ratio * windowHeight/(2.36));
    image(arrowImg, mouseX, mouseY);

}



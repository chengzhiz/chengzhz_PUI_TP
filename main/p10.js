let x, y;
var ratio;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p10/bg.png');
    front = loadImage('p10/deco.png');
    x = 500;
    y = 800;
    front.resize(300,450);
    arrowImg = loadImage("p0/cursor.png");
    angle = 0;
    velocity = 0.01;
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    push();
    translate(1385 * windowWidth / 1980, 725 * windowHeight/ 1220);
    imageMode(CENTER);
    rotate(angle);
    image(front, -10 ,-10, windowWidth/3, windowWidth/4);
    angle += velocity;
    // the shaking decoration
    if (velocity > 0){
        velocity -= 0.0001
    }
    if (velocity < 0){
        velocity += 0.0001
    }
    if (angle > 0.2){
        angle = 0.2;
        velocity = -0.01;
    }
    if (angle < -0.2){
        angle = -0.2;
        velocity = 0.01;
    }
    pop();
    imageMode(CENTER);
    image(arrowImg, mouseX, mouseY);
}



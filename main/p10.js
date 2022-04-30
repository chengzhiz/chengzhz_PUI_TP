var img;
let x, y;
var ratio;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p10/bg.png'); // 加载图像
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
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    // var ratio = map(mouseX, 0, windowWidth, 0.3, 0.6);
    push();
    translate(1385 * windowWidth / 1980, 725 * windowHeight/ 1220);
    imageMode(CENTER);
    rotate(angle);
    image(front, -10 ,-10, windowWidth/3, windowWidth/4); //400 800
    angle += velocity;
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
    // noRotate();

    imageMode(CENTER);
    image(arrowImg, mouseX, mouseY);
}



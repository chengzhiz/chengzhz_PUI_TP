var img;
let x, y;
var ratio;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p5/bg.png'); // 加载图像
    front = loadImage('p5/deco.png');
    x = 500;
    y = 800;
    front.resize(120,320);
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    var ratio = map(mouseX, 0, windowWidth, 1.2, 2.18);
    if (ratio < 1.3){
        ratio = 1.2;
    }
    if (ratio > 2){
        ratio = 2.16;
    }
    imageMode(CENTER);
    image(front, windowWidth/2+18, windowHeight/2+4, ratio * windowWidth/3.1, ratio * windowHeight/(2.36)); //400 800
    image(arrowImg, mouseX, mouseY);

}



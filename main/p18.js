
var i = 20;
var angle = 0;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p18/bg.png'); // 加载图像
    deco = loadImage('p18/deco.png');
    arrowImg = loadImage("p15/cursor.png");
    // front.resize(120,320);
    // arrowImg = loadImage("p10/deco2.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    imageMode(CENTER);
    image(deco, windowWidth/2-8, windowHeight/2- 40); //400 800
    tint(255, 10);

    imageMode(CORNER);

    // var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);

    tint(255, i);
    image(bg, 0, 0, windowWidth, windowHeight);
    tint(255, 255);
    image(arrowImg, mouseX, mouseY);

}

function mousePressed() {
    if (i < 250){
        i += 20;
    }
    if (i > 250){
        i = 20;
    }
}



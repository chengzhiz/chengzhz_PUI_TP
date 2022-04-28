
var i = 0;
var angle = 0;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p7/bg.png'); // 加载图像
    deco = loadImage('p7/deco.png');
    arrowImg = loadImage("p7/cursor.png");
    // front.resize(120,320);
    // arrowImg = loadImage("p10/deco2.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    imageMode(CENTER);
    image(arrowImg, mouseX, mouseY);
    // var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);
    tint(255, i);
    image(deco, 540* windowWidth/2045, 460* windowHeight/1220); //400 800
    i += 10;
    if (i > 255){
        i = 0;
    }

}



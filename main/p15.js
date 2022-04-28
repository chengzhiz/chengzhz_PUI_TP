
var i = 0;
var angle = 0;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p15/bg.png'); // 加载图像
    deco = loadImage('p15/deco.png');
    deco2 = loadImage("p15/deco2.png");
    deco3 = loadImage("p15/deco3.png");
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
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    imageMode(CENTER);
    image(arrowImg, mouseX, mouseY);
    // var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);
    tint(255, i);
    image(deco, 1170* windowWidth/2045, 460* windowHeight/1220); //400 800
    deco.resize(580,400);
    i += 15;
    if (i > 255){
        i = 0;
    }
    noTint();
    imageMode(CENTER);
    translate(1630* windowWidth/2045, 440* windowHeight/1220)
    rotate(angle);
    angle += 0.01;
    image(deco2, 0, 0); //400 800


}



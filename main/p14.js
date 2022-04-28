

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p14/bg.png'); // 加载图像
    deco1 = loadImage('p14/deco1.png');
    deco2 = loadImage('p14/deco2.png');
    deco3 = loadImage('p14/deco3.png');
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
    tint(255, 50);
    image(deco1, 400, 800); //400 800
    // var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);
    tint(255, map(mouseX, 1100, 1300, 100, 255));
    image(deco1, 400, 800); //400 800

    tint(255, 30);
    image(deco2, 450, 750); //400 800
    tint(255, map(mouseX, 1300, 1500, 150, 255)+100);
    image(deco2, 450, 750); //400 800

    tint(255, 10);
    image(deco3, 500, 680); //400 800
    tint(255, map(mouseX, 1500, 1700, 150, 255));
    image(deco3, 500, 680); //400 800
    noTint();
    image(arrowImg, mouseX, mouseY);

}



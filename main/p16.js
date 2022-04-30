
var i = 0;
var angle = 0;
var time = 0;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p16/bg.png'); // 加载图像
    deco1 = loadImage('p16/deco1.png');
    deco2 = loadImage('p16/deco2.png');
    deco3 = loadImage('p16/deco3.png');
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

    if (0 < time < 30){
        ratio = i;
        tint(255, ratio);
        image(deco1, 100* windowWidth/2045, 300* windowHeight/1220, windowWidth / 5, windowHeight/ 2.5); //400 800
    }

    if (30 < time < 60){
        ratio = i - 300;
        tint(255, ratio);
        image(deco2, 740* windowWidth/2045, 780* windowHeight/1220, windowWidth / 3.5, windowHeight/ 5); //400 800
    }

    if (60 < time < 90){
        ratio = i - 600;
        tint(255, ratio);
        image(deco3, 1700* windowWidth/2045, 200* windowHeight/1220, windowWidth / 8, windowHeight/ 3.5); //400 800
    }

    if (time > 120){
        time = 0;
        i = 0;
    }
    noTint();
    i += 10;
    time += 1;
    image(arrowImg, mouseX, mouseY);

}




var i = 0;
var angle = 0;
var count = 0;
var x1,x2,x3,x4,x5;


function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p17/bg.png'); // 加载图像
    deco1 = loadImage('p17/deco1.png');
    deco2 = loadImage("p17/deco2.png");
    deco3 = loadImage("p17/deco3.png");
    deco4 = loadImage('p17/deco4.png');
    deco5 = loadImage("p17/deco5.png");
    deco6 = loadImage("p17/deco6.png");
    arrowImg = loadImage("p15/cursor.png");
    // front.resize(120,320);
    // arrowImg = loadImage("p10/deco2.png");
    x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = windowWidth;
    x5 = windowWidth;
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    // fill(255, 255, 255);
    // stroke(255, 255, 255);
    // rect(0, 0, windowWidth, windowHeight);

    noTint();
    imageMode(CORNER);

    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    fill(255, 255, 255);
    stroke(255, 255, 255);
    // rect(0, 400, windowWidth, 500);


    // var ratio = map(mouseX, 0, windowWidth, -0.3, 0.3);
    // image(arrowImg, mouseX, mouseY);

}

function mousePressed() {
    count += 1;
    x1 = 130;
    x2 = 200;
    x3 = 400;
    x4 = windowHeight - 250;
    x5 = windowHeight - 200;
    if (count % 6 == 0) {
        clear();
    }
    if (count % 6 == 1) {
        image(deco1, x1, 290 * windowHeight/1220); //430
    }
    if (count % 6 == 2) {
        image(deco2, x2, 540 * windowHeight/1220);//540
    }
    if (count % 6 == 3) {
        image(deco3, x3, 800 * windowHeight/1220);//590
    }
    if (count % 6 == 4) {
        image(deco4, x4, 290 * windowHeight/1220);//1350
    }
    if (count % 6 == 5) {
        image(deco5, x5, 540 * windowHeight/1220);//1390
    }

}



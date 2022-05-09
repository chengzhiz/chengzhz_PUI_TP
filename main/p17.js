var i = 0;
var angle = 0;
var count = 0;
var x1,x2,x3,x4,x5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p17/bg.png');
    deco1 = loadImage('p17/deco1.png');
    deco2 = loadImage("p17/deco2.png");
    deco3 = loadImage("p17/deco3.png");
    deco4 = loadImage('p17/deco4.png');
    deco5 = loadImage("p17/deco5.png");
    deco6 = loadImage("p17/deco6.png");
    arrowImg = loadImage("p15/cursor.png");
    x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = windowWidth;
    x5 = windowWidth;
}

function draw() {
    noTint();
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
}

function mousePressed() {
    count += 1;
    x1 = 130 * 1980/ windowWidth;
    x2 = 200 * 1980/ windowWidth;
    x3 = 300 * 1980/ windowWidth;
    x4 = 800 * 1220/ windowHeight;
    x5 = 800 * 1220/ windowHeight;
    imageMode(CORNER);
    // each question is a single picture, click mouse to see pic show
    if (count % 6 == 0) {
        clear();
    }
    if (count % 6 == 1) {
        image(deco1, 130 * windowWidth/1980, 290 * windowHeight/1220, windowWidth/ 3, windowHeight/ 4);
    }
    if (count % 6 == 2) {
        image(deco2, 200 * windowWidth/1980, 540 * windowHeight/1220, windowWidth/ 3, windowHeight/ 4);
    }
    if (count % 6 == 3) {
        image(deco3, 300 * windowWidth/1980, 800 * windowHeight/1220, windowWidth/ 3, windowHeight/ 4);
    }
    if (count % 6 == 4) {
        image(deco4, 1400 *windowHeight/1980, 290 * windowHeight/1220, windowWidth/ 3, windowHeight/ 4);
    }
    if (count % 6 == 5) {
        image(deco5, 1400 *windowHeight/1980, 540 * windowHeight/1220, windowWidth/ 3, windowHeight/ 4);
    }

}



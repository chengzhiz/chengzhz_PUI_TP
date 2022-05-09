var img;
let x = 0;
var ratio;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p12/bg.png');
    deco1 = loadImage('p12/deco1.png');
    deco2 = loadImage('p12/deco2.png');
    arrowImg = loadImage("p0/cursor.png");

}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    // having some hint for people to understand there is something here
    tint(255, 40);
    image(deco1, 1100 * windowWidth/ 1980, 200 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco2, 1100 * windowWidth/ 1980, 380 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco1, 1300 * windowWidth/ 1980, 200 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco2, 1300 * windowWidth/ 1980, 380 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco1, 1500 * windowWidth/ 1980, 200 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco2, 1500 * windowWidth/ 1980, 380 * windowHeight/ 1220, windowWidth/14, windowHeight/7);

    noTint();
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    // then when the mouse move right, those will show up

    tint(255, map(mouseX, 1100* windowWidth/ 1980, 1300* windowHeight/ 1220, 20, 255));
    image(deco1, 1100 * windowWidth/ 1980, 200 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco2, 1100 * windowWidth/ 1980, 380 * windowHeight/ 1220, windowWidth/14, windowHeight/7);

    tint(255, map(mouseX, 1300 * windowWidth/ 1980, 1500 * windowHeight/ 1220, 20, 255));
    image(deco1, 1300 * windowWidth/ 1980, 200 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco2, 1300 * windowWidth/ 1980, 380 * windowHeight/ 1220, windowWidth/14, windowHeight/7);

    tint(255, map(mouseX, 1500* windowWidth/ 1980, 1700 * windowHeight/ 1220, 20, 255));
    image(deco1, 1500 * windowWidth/ 1980, 200 * windowHeight/ 1220, windowWidth/14, windowHeight/7);
    image(deco2, 1500 * windowWidth/ 1980, 380* windowHeight/ 1220, windowWidth/14, windowHeight/7);

    noTint();
    image(arrowImg, mouseX, mouseY);

}



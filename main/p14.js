function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p14/bg.png');
    deco1 = loadImage('p14/deco1.png'); // wheel1
    deco2 = loadImage('p14/deco2.png'); // wheel2
    deco3 = loadImage('p14/deco3.png'); // wheel3
    arrowImg = loadImage("p15/cursor.png");

}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);
    imageMode(CENTER);
    tint(255, 20);

    image(deco1, 400, 800 ,windowWidth/4.2, windowHeight/2.4);

    tint(255, map(mouseX, 1100 * windowWidth / 1980, 1300 * windowWidth/1980, 100, 255));
    image(deco1, 400, 800, windowWidth/4.2, windowHeight/2.4);

    tint(255, 20);
    image(deco2, 450, 750,windowWidth/2.4, windowHeight/1.6);
    tint(255, map(mouseX, 1300 * windowWidth / 1980, 1500 * windowWidth/1980, 150, 255));
    image(deco2, 450, 750, windowWidth/2.4, windowHeight/1.6);

    tint(255, 20);
    image(deco3, 500, 680,windowWidth/2, windowHeight/1.3);
    tint(255, map(mouseX, 1500 * windowWidth / 1980, 1700 * windowWidth/1980, 150, 255));
    image(deco3, 500, 680, windowWidth/2, windowHeight/1.3);
    noTint();
    image(arrowImg, mouseX, mouseY);

}



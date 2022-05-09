var i = 0;
var angle = 0;
var time = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p16/bg.png');
    deco1 = loadImage('p16/deco1.png');
    deco2 = loadImage('p16/deco2.png');
    deco3 = loadImage('p16/deco3.png');
    arrowImg = loadImage("p15/cursor.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight);

    // past phrase
    if (0 < time < 30){
        ratio = i;
        tint(255, ratio);
        image(deco1, 100* windowWidth/2045, 300* windowHeight/1220, windowWidth / 5, windowHeight/ 2.5);
    }
    // present phrase
    if (30 < time < 60){
        ratio = i - 300;
        tint(255, ratio);
        image(deco2, 740* windowWidth/2045, 780* windowHeight/1220, windowWidth / 3.5, windowHeight/ 5);
    }
    // future phrase
    if (60 < time < 90){
        ratio = i - 600;
        tint(255, ratio);
        image(deco3, 1700* windowWidth/2045, 200* windowHeight/1220, windowWidth / 8, windowHeight/ 3.5);
    }

    // set to normal
    if (time > 120){
        time = 0;
        i = 0;
    }
    noTint();
    i += 10;
    time += 1;// counter for time
    image(arrowImg, mouseX, mouseY);

}



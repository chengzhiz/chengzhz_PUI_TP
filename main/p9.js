var img;
let x1, y1, x2, y2, y3, y4;
var ratio;
let speed1 = 9;
let speed2 = 8;
let speed3 = 4;
let speed4 = 5;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p9/bg.png'); // 加载图像
    deco1 = loadImage('p9/deco2.png');
    deco2 = loadImage('p9/deco1.png');
    x1 = 1300 / 1980 * windowWidth;
    y1 = 400/ 1220 *  windowHeight ;
    y3 = 460 / 1220 * windowHeight;
    x2 = 1400 / 1980 *windowWidth;
    y2 = 430 /1220 * windowHeight;
    y4 = 460 /1220 * windowHeight;
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800
    push();
    imageMode(CENTER);
    image(deco1, 1280 *  windowWidth/1980, y1, windowWidth/16, windowHeight/6); //400 800
    image(deco2, 1380 * windowWidth/1980, y2, windowWidth/16, windowHeight/6); //400 800
    image(deco1, 1580 * windowWidth /1980, y3 * 1220/ windowHeight, windowWidth /16, windowHeight/6); //400 800
    image(deco2, 1640 * windowWidth /1980, y4 * 1220/ windowHeight, windowWidth /16, windowHeight/6); //400 800
    y1 -= speed1; // 9
    y2 -= speed2; //8
    y3 -= speed3; //4
    y4 -= speed4; // 5
    if (y1 < 0){
        y1 = 400 * windowHeight/1220;
    }
    if (y2 < 0){
        y2 = 430 * windowHeight/1220;
    }
    if (y3 < 0){
        y3 = 430* windowHeight/1220;
    }
    if (y4 < 0){
        y4 = 460 * windowHeight/1220;
    }
    if ((mouseX < 1000/1980 * windowHeight) || (mouseY< 200* windowWidth/ 1220) || (mouseY > 900/1220 * windowHeight)){
        speed1 = 1.9;
        speed2 = 1.8;
        speed3 = 1.4;
        speed4 = 1.5;
    }
    else {
        speed1 = 9;
        speed2 = 8;
        speed3 = 4;
        speed4 = 5;

    }
    pop();

    image(arrowImg, mouseX, mouseY);

}



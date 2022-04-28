var img;
var answer;
let question;
let offset = 0;
let easing = 0.05;
var fade;
var fadeAmount = 1;
let x1, x2, s;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p2/bg.png'); // 加载图像
    left = loadImage('p2/left.png');
    right = loadImage('p2/right.png');
    bg.resize(windowWidth, windowHeight);
    left.resize(windowWidth, windowHeight);
    right.resize(windowWidth, windowHeight);
    x1 = 0;
    x2 = 1600;
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    var s = map(mouseX, 400, 1000, 0, 380);
    if (s > 380){
        s = 380;
    }
    if (s < 230){
        s = 230;
    }
    image(bg, 0, 0, windowWidth, windowHeight); //1940 1220
    // reach 400 and 800 for each image

    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(280 * windowWidth/1940, 376 * windowHeight/1220, 1600 * windowWidth/1940, 570 * windowHeight/1220);

    image(left, (80 + s)* windowWidth/1940, 380* windowHeight/1220); //400 800
    image(right, (1600 - 2 * s)* windowWidth/1940, 380* windowHeight/1220);
    image(arrowImg, mouseX, mouseY);

}
//
// function setup() {
//     // createCanvas(1920, 1080);
//     createCanvas(windowWidth, windowHeight);
//     bg = loadImage('p2/bg.png'); // 加载图像
//     left = loadImage('p2/left.png');
//     right = loadImage('p2/right.png');
//     bg.resize(windowWidth, windowHeight);
//     x1 = 0;
//     x2 = 1600;
//     s = 1.5;
//     v = 0.01;
//
// }
//
// function draw() {
//     // delay(100);
//     image(bg, 0, 0); // 完全不透明
//     // var s = map(mouseX, 0, windowWidth, 0, 50);
//     // tint(255, op)
//     image(left, x1, 360); //400 800
//     image(right,x2, 360);
//     x1 = x1 + 4 * s;
//     x2 = x2 - 8 * s;
//     s -= v;
//
//     if (x1 > 400){
//         x1 = 0;
//         s = 2;
//         // s = 0.8;
//         // s *= 2;
//         // function setup();
//         // tint(255, 0);
//         wait(1000);
//         fill(255, 255, 255);
//         stroke(255, 255, 255);
//         rect(400, 300, 1000, 800);
//     }
//     if (x1 > 370) {
//         s = 0.1;
//         v = 0;
//     }
//     if (x1 > 330) {
//         s = 0.3;
//         v = 0.006;
//     }
//
//     if (x2 < 800){
//         x2 = 1600;
//         // s *= 2;
//         // function setup();
//     }
// }
//
// function wait(time) {
//     start = millis()
//     do {current = millis();
//     }
//     while(current < start + time)
// }
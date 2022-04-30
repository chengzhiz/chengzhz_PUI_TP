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


// this page seems not working as expected
function draw() {
    var s = map(mouseX, windowWidth * (0.3) , windowWidth * (0.7), 0, 0.15 * windowWidth);
    image(bg, 0, 0, windowWidth, windowHeight); //1940 1220
    // reach 400 and 800 for each image
    if(s > 0.1 * windowWidth){
        s = 0.1 * windowWidth
    }
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(280 * windowWidth/1980, 376 * windowHeight/1220, 1600 * windowWidth/1980, 570 * windowHeight/1220);
    image(left, (windowWidth * 0.2 + s) * windowWidth / 1980, 380 * windowHeight / 1220); //400 800
    image(right, (0.7 * windowWidth - 1.5 * s) * windowWidth / 1980, 380 * windowHeight / 1220);
    image(arrowImg, mouseX, mouseY);
}

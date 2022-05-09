var img;
var answer;
let question;
let offset = 0;
let easing = 0.05;
let x1, x2, s;

// this page needs ome optimization
function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p2/bg.png');
    left = loadImage('p2/left.png'); // left half image
    right = loadImage('p2/right.png'); // right half image
    bg.resize(windowWidth, windowHeight);
    left.resize(windowWidth, windowHeight);
    right.resize(windowWidth, windowHeight);
    x1 = 0;
    x2 = 1600;
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    var s = map(mouseX, windowWidth * 0.3 , windowWidth * 0.7, 0, 0.15 * windowWidth);
    image(bg, 0, 0, windowWidth, windowHeight);
    if(s > 0.1 * windowWidth){
        s = 0.1 * windowWidth
    }
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(280 * windowWidth/1980, 376 * windowHeight/1220, 1600 * windowWidth/1980, 570 * windowHeight/1220);

    // these two lines needs optimizaion
    image(left, (windowWidth * 0.2 + s) * windowWidth / 1980, 380 * windowHeight / 1220, windowWidth/3, windowHeight/2);
    image(right, (0.7 * windowWidth - s) * windowWidth / 1980, 380 * windowHeight / 1220, windowWidth/3, windowHeight/2.2);

    image(arrowImg, mouseX, mouseY);
}

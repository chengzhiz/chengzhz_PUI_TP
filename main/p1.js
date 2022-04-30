var img;
var answer;
var placeholder;

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    img = loadImage('p1/bg.png'); // 加载图像
    // question = loadImage('p1/question.png');
    answer = loadImage('p1/answer.png');
    placeholder = loadImage('p1/placeholder.png');
    arrowImg = loadImage("p0/cursor.png");
    // img.resize(windowWidth, windowHeight);
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    image(img, 0, 0, windowWidth, windowHeight); // 完全不透明
    image(placeholder, 0, 0, windowWidth, windowHeight);
    tint(255, map(mouseX, windowWidth/4, windowWidth/2, 0, 255* 1080/windowWidth));
    image(answer, 0, 0, windowWidth, windowHeight);
    tint(255, 255);
    image(arrowImg, mouseX, mouseY);
    // clear();
    // var op = map(mouseX, 0, windowWidth, 0, 255)
    // fill(204, 101, 192, op);
    // tint(255, op)
    // image(question, 280/ 1920 * windowWidth, 79/ 1080 * windowHeight);
    // image(answer, 1730/ 1920 * windowHeight, 400/1080 * windowHeight);
    // let dx = mouseX - img.width / 2 - offset;

    // offset += dx * easing;
    // tint(255, 127); // 半透明
    // image(img, offset, 0);
}

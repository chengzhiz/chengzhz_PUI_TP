var img;
var answer;
var placeholder;

function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('p1/bg.png');
    answer = loadImage('p1/answer.png'); // answer image
    placeholder = loadImage('p1/placeholder.png'); // placeholder image
    arrowImg = loadImage("p0/cursor.png");
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    noTint();
    image(img, 0, 0, windowWidth, windowHeight);
    image(placeholder, 0, 0, windowWidth, windowHeight);
    tint(255, map(mouseX, windowWidth/4, windowWidth/2, 0, 255* 1080/windowWidth)); // mapping the transparency
    image(answer, 0, 0, windowWidth, windowHeight);
    tint(255, 255);
    image(arrowImg, mouseX, mouseY);

}

var bg;

function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('p0/bg.png'); // background image

}

function draw() {
    image(img, 0, 0, windowWidth, windowHeight);
}

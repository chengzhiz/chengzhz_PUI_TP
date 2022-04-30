var bg;


function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('p0/bg.png'); // 加载图像

}

function draw() {
    image(img, 0, 0, windowWidth, windowHeight); // 完全不透明

    // let dx = mouseX - img.width / 2 - offset;

    // offset += dx * easing;
    // tint(255, 127); // 半透明
    // image(img, offset, 0);
}

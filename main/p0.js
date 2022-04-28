var bg;


function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    img = loadImage('p0/bg.png'); // 加载图像
    img.resize(windowWidth, windowHeight);

}

function draw() {
    image(img, 0, 0); // 完全不透明

    // let dx = mouseX - img.width / 2 - offset;

    // offset += dx * easing;
    // tint(255, 127); // 半透明
    // image(img, offset, 0);
}

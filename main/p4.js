var img;
let x, y;
var ratio;
let decos = [];

// function preload(){
//     // deco = loadImage("p4/deco1.png");
//     for(let i = 0; i < 6; i++){
//         deco[i] = loadImage("p4/deco${i}.png");
//     }
// }

function setup() {
    // createCanvas(1920, 1080);
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p4/bg.png'); // 加载图像
    // for (let i = 0; i < 6; i++) {
    //     let x = random(199);
    //     let y = random(200);
    //     let r = random(20,60);
    //     // let deco = random(decos);
    //     let b = new deco(x,y,r);
    //     decos.push(b);
    // }
    deco1 = loadImage('p4/deco1.png');
    deco2 = loadImage('p4/deco2.png');
    deco3 = loadImage('p4/deco3.png');
    deco4 = loadImage('p4/deco4.png');
    deco5 = loadImage('p4/deco5.png');
    deco6 = loadImage('p4/deco6.png');
    arrowImg = loadImage("p0/cursor.png");
    // x = 500;
    // y = 800;
    // front.resize(120,320);
}


function draw() {
    // var s = map(mouseX, 0, windowWidth, 0, 380);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    imageMode(CORNER);
    image(bg, 400, 400); //400 800

    imageMode(CENTER);

    image(deco1, 1000 + random(-2,2), 400 + random(-1,1)); //400 800
    image(deco2, 300 + random(-2,2), 200 + random(-1,1)); //400 800
    image(deco3, 1700 + random(-2,2), 700 + random(-1,1)); //400 800
    image(deco4, 1300 + random(-2,2), 800 + random(-1,1)); //400 800
    image(deco5, 400 + random(-2,2), 1000 + random(-1,1)); //400 800
    image(deco6, 1400 + random(-2,2), 500 + random(-1,1)); //400 800

    image(arrowImg, mouseX, mouseY);
}



// var img;
// let x, y;
// var ratio;
// let decos = [];
//
// function preload(){
//     // deco = loadImage("p4/deco1.png");
//     for(let i = 0; i < 6; i++){
//         deco[i] = loadImage("p4/deco${i}.png");
//     }
// }
//
// function setup() {
//     // createCanvas(1920, 1080);
//     createCanvas(windowWidth, windowHeight);
//     bg = loadImage('p4/bg.png'); // 加载图像
//
//     for (let i = 0; i < 6; i++) {
//         let x = random(199);
//         let y = random(200);
//         let r = random(20,60);
//         // let deco = random(decos);
//         let b = new deco(x,y,r);
//         decos.push(b);
//     }
//     // deco1 = loadImage('p4/deco1.png');
//     // deco2 = loadImage('p4/deco2.png');
//     // deco3 = loadImage('p4/deco3.png');
//     // deco4 = loadImage('p4/deco4.png');
//     // deco5 = loadImage('p4/deco5.png');
//     // deco6 = loadImage('p4/deco6.png');
//     // x = 500;
//     // y = 800;
//     // front.resize(120,320);
// }
//
// function mousePressed(){
//     for (let i = 0; i < 6; i++){
//         deco[i].clicked(mouseX, mouseY);
//     }
// }
//
// function draw() {
//     // var s = map(mouseX, 0, windowWidth, 0, 380);
//     imageMode(CORNER);
//     image(bg, 400, 400); //400 800
//     imageMode(CENTER);
//     for(let i = 0; i < 6; i++){
//         deco[i].move();
//         deco[i].show();
//     }
//
//     // image(deco1, 1000 + random(-1,1), 400 + random(-1,1)); //400 800
//     // image(deco2, 300 + random(-1,1), 200 + random(-1,1)); //400 800
//     // image(deco3, 1700 + random(-1,1), 700 + random(-1,1)); //400 800
//     // image(deco4, 1300 + random(-1,1), 800 + random(-1,1)); //400 800
//     // image(deco5, 400 + random(-1,1), 1000 + random(-1,1)); //400 800
//     // image(deco6, 1400 + random(-1,1), 500 + random(-1,1)); //400 800
// }
//
// class deco{
//     constructor(x,y,r){
//         this.x = x;
//         this.y = y;
//         this.r = r;
//         this.pic = random(decos);
//     }
//     clicked(px, py){
//         if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r){
//             this.pic = random(decos);
//         }
//     }
//     move(){
//         this.x = this.x + random(-1,1);
//         this.y = this.y + random(-1,1);
//     }
//     show(){
//         image(this.pic, this.x, this.y, this.r, this.r);
//     }
//
// }


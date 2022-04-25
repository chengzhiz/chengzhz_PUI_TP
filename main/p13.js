
// this is the source code

// Object Communication Part 2
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.7-object-communication-2.html
// https://youtu.be/5Q9cA0REztY
// https://editor.p5js.org/codingtrain/sketches/7SjPmXN2

let images = [];
var count1 = True;
var count2 = True;


function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('p13/bg.png'); // 加载图像
    deco1 = loadImage('p13/deco1.png');
    deco2 = loadImage('p13/deco2.png');
    deco3 = loadImage('p13/deco1.png');
    deco4 = loadImage('p13/deco2.png');
    arrowImg = loadImage("p0/cursor.png");
    images = [deco1, deco2];
}

function draw() {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);

    imageMode(CORNER);
    image(bg, 0, 0, windowWidth, windowHeight); //400 800\
    imageMode(CENTER);
    image(deco1, 700+ random(-1,1), 850+random(-1,2));
    image(deco2, 1400+ random(-1,1), 850 + random(-1,2));

    if (mouseIsPressed === true) {
        let d1 = dist(mouseX, mouseY, 700, 850)
        if ((mouseButton === LEFT) && (d1 < 100)){
            deco1 = deco4;
            // if (count1 === True){
            //     count1 = False;
            //     deco1 = images[1]
            // }
            // else if(count1 === False){
            //     count1 += True;
            //     deco1 = images[0];
            // }


        }
        let d2 = dist(mouseX, mouseY, 1400, 850)
        if ((mouseButton === LEFT) && (d2 < 100)){
            deco2 = deco3;

        }
    }
    noTint();
    image(arrowImg, mouseX, mouseY);

}

class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return d < this.r + other.r;
        // if (d < this.r + other.r) {
        //   return true;
        // } else {
        //   return false;
        // }
    }

    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}



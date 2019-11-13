// Oliver Meredith
// https://www.olivermeredith.com/



let zoff = 0;

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;


const margin = {}
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
canvasHeight = canvasParent.offsetHeight;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');


    x1 = 500;
    y1 = 600;
    x2 = 150;
    y2 = 50;
    // x3 = width;
    y3 = 0;
    margin.left = width / 10
    margin.top = height / 10
    margin.right = width - width / 10
    margin.bottom = height - height / 10


}



function draw() {
    // background(48, 106, 137);
    background(235);
    // noStroke()
    // stroke(237, 138, 99)
    stroke(55, 55)
    noFill()



    for (let i = 0; i < 140; i++) {
        let yPos = map(i, 0, 140, margin.top, margin.bottom)
        // ellipse(100, yPos, 4, 4)
        strokeWeight(map(i, 0, 100, 1, 3))

        // fill(255, 0, 0)
        // noStroke()
        // fill(55, 55)
        // ellipse(x1, y1, 4, 4)
        // // fill(0, 0, 255)
        // ellipse(x2, y2, 4, 4)
        // // ellipse(x3, y3, 4, 4)
        // noFill()
        // stroke(55)

        y1 = map(sin(zoff + i * 0.01), -1, 1, margin.top, margin.bottom)
        x1 = map(cos(zoff + i * 0.01), -1, 1, margin.left, margin.right)
        y2 = map(cos(zoff + i * 0.02), -1, 1, margin.top, margin.bottom)
        x2 = map(noise(zoff + i * 0.02), 0, 1, margin.left, margin.right)
        // y3 = height / 2 + map(noise(zoff + i * 0.02), 0, 1, height / 10, height)
        beginShape();
        vertex(margin.left, yPos);
        bezierVertex(
            x1,
            y1,
            x2,
            y2,
            width - width / 10,
            yPos
        );

        // fill(255, 0, 0)
        // ellipse(x1, y1, 4, 4)
        // fill(0, 0, 255)
        // ellipse(x2, y2, 4, 4)
        // ellipse(x3, y3, 4, 4)
        noFill()

        // bezierVertex(0, (i * 10), i * 20, 0, width, height / 2 - yPos * 2);
        endShape();
    }

    zoff += 0.01
}
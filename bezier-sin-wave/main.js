// Oliver Meredith
// https://www.olivermeredith.com/


let phase = 0;
let zoff = 0;
let slider;
let noiseMax = 2
let left = []
let yLength = 40
let xLength = 90
let eSize = 2
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
const margin = { left: 10, top: 10 }
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    // slider = createSlider(0, 10, 3, 0.1);
    for (let i = 0; i < yLength; i++) {
        left.push(floor(noise(i) * 20))

    }

    x1 = 500;
    y1 = 600;
    x2 = 150;
    y2 = 50;
    // x3 = width;
    // y3 = height;



}



function draw() {
    background(235);
    // noStroke()
    fill(225)
    noFill()
    y1 = map(sin(zoff), -1, 1, -350, height + 350)
    x2 = map(cos(zoff), -1, 1, -350, height + 350)
    for (let i = 0; i < 60; i++) {
        let yPos = map(i, 0, 60, 0, height)
        beginShape();
        vertex(0, yPos);
        bezierVertex(
            x1,
            y1,
            x2,
            y2,
            width,
            yPos
        );

        fill(255, 0, 0)
        ellipse(x1, y1, 4, 4)
        fill(0, 0, 255)
        ellipse(x2, y2, 4, 4)
        // ellipse(x3, y3, 4, 4)
        noFill()

        // bezierVertex(0, (i * 10), i * 20, 0, width, height / 2 - yPos * 2);
        endShape();
    }

    zoff += 0.01
}
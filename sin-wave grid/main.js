// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0;
var xoff = 0, yoff = 0;
let center, yLength;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;

function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    center = width / 2
    noFill()
}

function draw() {
    background(25, 25, 25, 55)
    stroke(225, 225, 225, 125)

    translate(width - 20, -10)
    for (let cols = 0; cols < 9; cols++) {
        push()
        translate(-60 * cols, 10)
        for (let rows = 0; rows < 12; rows++) {
            if (rows > 1) {
                translate(0, 10 * 5)
                for (let y = 0; y < 30; y++) {

                    ellipse(20 * sin(y * (rows / cols / 6) + inc), y, 5, 5)

                }
            }
        }
        pop()
    }

    inc += 0.02
}
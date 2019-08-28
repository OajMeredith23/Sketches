// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0;
var xoff = 0, yoff = 0;
let center, yLength;
let numCols;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;

function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    center = width / 2
    noFill()

    numCols = map(width, 0, 700, 0, 10)
    numRows = map(width, 0, 700, 4, 13)
}

function draw() {
    background(225, 225, 225, 55)
    // background(255)
    // stroke(25, 25, 25, 125)
    noStroke()

    translate(20, -30)

    for (let cols = 0; cols < 6; cols++) {
        push()

        translate(80 * cols, 0)

        for (let rows = 0; rows < 6; rows++) {
            translate(0, 70)

            for (let y = 0; y < 3; y++) {

                fill(25, 25, 25)
                triangle(5 - 25 * sin(cols + inc), 75 + 10 * cos(cols + inc), 58, 20, 86, 75)

                stroke(2250, 100, 50)
                fill(225)
                triangle(30, 75, 58, 20, 86, 75)


            }

        }

        pop()
    }

    inc += 0.1
}
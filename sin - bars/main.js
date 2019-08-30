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
    background(225, 225, 225, 255)
    strokeWeight(12.0);
    strokeCap(ROUND);
    translate(0, 30)
    for (let rows = 0; rows < 20; rows++) {

        for (let cols = 0; cols < 3; cols++) {

            let x1 = map(sin(rows + inc), 0, 1, -20, 20)
            let length = dist(20, rows * 20, width / 2 - x1 - 20, rows * 20)
            // console.log(length)
            line(20, rows * 20, width / 2 - x1 - 20, rows * 20)
            line(width / 2 - x1, rows * 20, width - 20, rows * 20)

        }

    }
    inc += 0.02
}
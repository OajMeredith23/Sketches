// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.1;
var xoff = 0, yoff = 0;
let center, yLength;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    background(230)

    center = width / 2
    yLength = height
}

function draw() {
    background(255)
    fill(155)

    for (let y = 0; y < yLength + 120; y++) {

        let size = y < yLength / 2 ? map(y, 0, yLength / 2, 100, 0) : map(y, yLength / 2, yLength, 0, 100)

        stroke(map(y, 0, yLength, 0, 195), 0, 100)

        ellipse(center + map(sin(y * 0.02 + xoff), 0, 1, -10, 10) * 3,
            -20 + y,
            size,
            size)
    }
    xoff += inc;
}
// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.2;
var xoff = 0, yoff = 0;
let center, yLength;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    center = width / 2
    yLength = height
}

function draw() {
    background(55)
    fill(25)

    for (let y = 0; y < yLength + 150; y++) {

        let size = 40;
        let throwW = map(sin(y * 0.02 + xoff), 0, 1, -20, 20);

        stroke(map(y, 0, yLength, 0, 250), 0, 150)

        ellipse(center + throwW,
            y,
            size / (y * 0.002),
            size / (y * 0.002))
    }

    xoff += inc;
}
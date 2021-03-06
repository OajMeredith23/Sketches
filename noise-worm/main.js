// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.02;
var xoff = 0, yoff = 0;
let center, yLength;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    center = width / 2
    yLength = height - 100
}

function draw() {
    background(255)
    for (let y = 0; y < yLength; y++) {

        stroke(map(y, 0, yLength, 0, 195), 0, 100)
        ellipse(center + map(noise(y * 0.03 + xoff), 0, 1, -40, 40) * 3, 10 + y, y / 3, y / 3)
    }
    xoff += inc;
}
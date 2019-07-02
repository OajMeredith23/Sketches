
var inc = 0.02;
var coff = 0;
var xoff = 0;
var yoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
console.log(canvasWidth)
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}

function draw() {
    var xPos = map(noise(xoff), 0, 1, 100, width);
    var yPos = map(noise(yoff), 0, 1, 100, height);
    var col = map(noise(coff), 0, 1, 150, 255)
    var col2 = map(noise(coff), 0, 1, 255, 150)

    stroke(map(xPos, 0, width, 0, 255), 0, map(yPos, 0, height, 255, 0), 8);
    line(width / 2, height / 2, xPos, yPos)

    xoff += inc;
    yoff += inc / 2;
    coff += inc * 1.5;
}
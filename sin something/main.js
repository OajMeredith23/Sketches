// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.1;
var xoff = 0, yoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}

function draw() {

    let d = map(sin(xoff), 0, 1, -20, 20)
    ellipse(width / 2 + d, 50 + yoff, 200 / (yoff / 100), 100 / (yoff / 50))

    xoff += inc
    yoff += 0.5

}
// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.01;
let xoff = 0, yoff = 0;
let x;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    // noFill()
    stroke(55, 55, 55, 70)

    background(235);
    x = 0;
}

// let x = 0, y = 10;

function draw() {

    background(235);

    ellipse(x / 2, 10, 20, 20)

    x += 5

    console.log(x === width / 2)

}

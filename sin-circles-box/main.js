// Oliver Meredith
// https://www.olivermeredith.com/

let xoff = 0;
let inc = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;

function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');


    noFill()

    background(225)
}
function draw() {

    let s = width / 3 * sin(inc)
    let c = width / 3 * cos(inc)
    stroke(c, c, c, 25)

    ellipse(width / 2 + s, height / 2 + c, c, s)

    inc += 0.02
}
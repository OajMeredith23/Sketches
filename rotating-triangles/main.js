// Oliver Meredith
// https://www.olivermeredith.com/

let inc = 0,
    sizeInc = 0,
    r = 0;
let x1, y1, x2, y2, x3, y3;
let stopDraw = false;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    background(235)

    let margin = width / 3;
    x1 = -margin;
    y1 = margin;
    x2 = 0;
    y2 = -margin;
    x3 = margin;
    y3 = margin;

    noFill();

    angleMode(DEGREES)
}


function draw() {
    background(235)
    translate(width / 2, height / 2)
    rotate(180)
    for (let i = 0; i < 180; i++) {

        push()
        stroke(85, 85, 85, map(i, 0, 180, 205, 0))

        r = floor(map(cos(i * inc), 0, 1, -40, 0))
        rotate(r)

        sizeInc = min(sizeInc, width / 10);
        // console.log(sizeInc)
        triangle(x1 - sizeInc, y1 + sizeInc, x2, y2 - sizeInc, x3 + sizeInc, y3 + sizeInc)
        sizeInc -= 1.2
        pop()

    }
    inc += 0.02

    sizeInc = 0;
}
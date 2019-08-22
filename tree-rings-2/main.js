// Oliver Meredith
// https://www.olivermeredith.com/

let s = 0, plusY = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}

function draw() {
    translate(width / 2, height / 2)
    background(195)
    noFill()


    beginShape();
    vertex(0, 0);
    for (let x = 0; x < 100; x++) {
        let xPos = map(x, 0, 100, 0, 100)
        let yPos = map(sin(s), 0, 1, -40, 40)
        vertex(xPos, yPos)
        s += 0.04
    }

    vertex(100, 0)
    endShape();
    noLoop();
}

function drawPoint(x, y) {
    beginshape(LINES);
    vertex(x, y)
    endShape();

}
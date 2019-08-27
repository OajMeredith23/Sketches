// Oliver Meredith
// https://www.olivermeredith.com/

let inc = 0;
let sizeX;
let sizeY;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    background(235)
    noFill()
}

function draw() {

    background(35, 35, 35, 35)

    sizeX = map(sin(inc), 0, 1, 0, 400)
    sizeY = map(cos(inc), 0, 1, 0, 400)


    translate(sizeX / 10, sizeY / 10)

    stroke(235, 235, 235, 255)
    ellipse(width / 2, height / 2, sizeX, sizeY)

    inc += 0.02
}
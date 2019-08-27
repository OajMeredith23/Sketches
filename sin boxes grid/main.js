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
    background(35)
    noFill()
}

function draw() {

    // background(235, 235, 235, 5)

    stroke(225)
    translate(10, 10)
    // let maxSize = map(width, 0, 500, 10, 25)
    let maxSize = 20
    for (let i = 0; i < 15; i++) {

        let yPos = map(i, 0, 15, 20, height - 20)
        sizeX = map(sin(i), 0, 1, 10, maxSize)

        for (let j = 0; j < 12; j++) {
            let xPos = map(j, 0, 12, 20, width)

            sizeY = map(cos(j), 0, 1, 10, maxSize)

            rect(xPos, yPos, sizeX, sizeY)
        }
    }

    inc += 0.02
}
// Oliver Meredith
// https://www.olivermeredith.com/

let margin = 20;
let cols = 30;
let rows = 30;
let inc = 0, inc2 = 0;
let circleSize = 10
let points = [];
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    for (let x = 0; x <= cols; x++) {
        for (let y = 0; y <= rows; y++) {
            let xPos = map(x, 0, cols, margin, width - margin)
            let yPos = map(y, 0, rows, margin, height - margin)
            // point(xPos, yPos)
            points.push([xPos, yPos])
        }

    }
    console.log(points)
    noFill()
    stroke(155)
    background(25)
    strokeWeight(0.5)
}


function draw() {


    beginShape()
    for (let i = 0; i < 600; i++) {
        let x = map(noise(inc), 0, 1, margin, width - margin)
        let y = map(noise(inc2), 0, 1, margin, height - margin)

        inc += 0.03
        inc2 += 0.02
        vertex(x, y)

        for (let j = 0; j < points.length; j++) {
            point(points[j][0], points[j][1])


            if (x + 10 > points[j][0] &&
                x - 10 < points[j][0] &&
                y + 10 > points[j][1] &&
                y - 10 < points[j][1]
            ) {

                noStroke()
                fill(255, 55)
                ellipse(points[j][0], points[j][1], circleSize, circleSize)
            }
            stroke(140)
            noFill()
        }

    }
    endShape()
    noLoop()
}
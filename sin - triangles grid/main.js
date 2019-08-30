// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0;
var xoff = 0, yoff = 0;
let center, yLength;
let numCols;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;


let x1, y1, x2, y2, x3, y3
let tri = 35
let margin = 24
function setup() {
    var canvas = createCanvas(canvasWidth + 50, canvasWidth);
    canvas.parent('p5Sketch');

    noFill();
    background(235);

    x1 = margin,
        y1 = tri + margin,
        x2 = margin + tri,
        y2 = tri - margin,
        x3 = margin + tri * 2,
        y3 = tri + margin
}

function draw() {
    background(255);






    fill(0, 25, 25, 55)
    // blendMode(REPLACE)
    translate(50, 50)
    strokeWeight(1)

    for (let cols = 0; cols < 10; cols++) {
        for (let rows = 0; rows < 10; rows++) {

            push()
            translate(cols * 2.6 * tri, rows * 2.6 * tri)

            for (let i = 0; i < 3; i++) {

                let d = map(sin(cols * rows + i), 0, 1, 0, 10)

                triangle(
                    x1 - d,
                    y1 - d,
                    x2 + d,
                    y2 - d,
                    x3 + d,
                    y3 + d
                )

            }

            // fill(235)
            // stroke(225, 70, 0)
            stroke(225)
            strokeWeight(2)

            triangle(
                x1,
                y1,
                x2,
                y2,
                x3,
                y3
            )
            pop()

        }
    }


    inc += 0.07
    noLoop()
}
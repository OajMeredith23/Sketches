// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0;
var xoff = 0, yoff = 0;
let center, yLength;
let numCols;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;


let x1, y1, x2, y2, x3, y3
let tri = 150
let margin = 80
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
    background(25, 25, 25, 25);






    fill(55, 55, 55, 55)
    translate(150, 150)


    for (let i = 0; i < 3; i++) {

        let d = map(sin(i + inc), 0, 1, -20, 20)

        triangle(
            x1 - d,
            y1 - d,
            x2 + d * 1.2,
            y2 - d,
            x3 + d * 2.8,
            y3 + d
        )

    }



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


    inc += 0.02
}
// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0;

let numCols;
let blue;
let yellow;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;


let x1, y1, x2, y2, x3, y3
let tri = 35
let margin = 24
function setup() {
    var canvas = createCanvas(canvasWidth + 50, canvasWidth);
    canvas.parent('p5Sketch');

    background(235);
    translate(50, 50)
    strokeWeight(1)

    blue = new Riso("blue");
    yellow = new Riso("yellow");

    x1 = margin,
        y1 = tri + margin,
        x2 = margin + tri,
        y2 = tri - margin,
        x3 = margin + tri * 2,
        y3 = tri + margin

    triangleStatic(x1, y1, x2, y2, x3, y3, yellow)
    trianglesGrid(tri, x1, y1, x2, y2, x3, y3, blue)
    yellow.cutout(blue)
    drawRiso()
}
function trianglesGrid(tri, x1, y1, x2, y2, x3, y3, layer) {
    layer.noFill()
    layer.stroke(255)
    layer.strokeWeight(2)
    for (let cols = 0; cols < 10; cols++) {
        for (let rows = 0; rows < 10; rows++) {

            layer.push()
            layer.translate(cols * 2.6 * tri, rows * 2.6 * tri)

            for (let i = 0; i < 3; i++) {

                let d = map(noise(cols * rows * i), 0, 1, -15, 15)

                layer.triangle(
                    x1 - d,
                    y1 - d,
                    x2 + d,
                    y2 - d,
                    x3 + d,
                    y3 + d
                )

            }

            layer.pop()

        }
    }

}



function triangleStatic(x1, y1, x2, y2, x3, y3, layer) {

    layer.fill(225)
    // layer.strokeWeight(2)
    for (let cols = 0; cols < 10; cols++) {
        for (let rows = 0; rows < 10; rows++) {

            layer.push()
            layer.translate(cols * 2.6 * tri, rows * 2.6 * tri)
            layer.triangle(
                x1,
                y1,
                x2,
                y2,
                x3,
                y3

            )
            layer.pop()

        }

    }
}

function mousePressed() {
    exportRiso();
}
// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.1;
var xoff = 0, yoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}

function draw() {
    // background(230)

    for (let y = 0; y < height; y++) {
        let d = map(noise(xoff), 0, 1, 50, 100);

        for (let x = (d - 50); x < d; x++) {

            let yPos = map(noise(yoff), 0, 1, -2, 2);
            point(10 + (x * 3), 10 + (y * 6) + yPos)
            yoff += inc
        }
        xoff += inc
    }

    noLoop();

}
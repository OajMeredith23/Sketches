// Oliver Meredith
// https://www.olivermeredith.com/

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;


let inc = 0.2;
let scl = 10;
let cols, rows;
let zoff = 0;

let fr;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    // pixelDensity(1)
    fr = createP('');
    cols = floor(width / scl)
    rows = floor(height / scl)
}


function draw() {
    background(255);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * width) * 4;
            let r = noise(xoff, yoff, zoff) * TWO_PI * 1;
            let v = p5.Vector.fromAngle(r);
            // fill(r)
            stroke(0);
            push()
            translate(x * scl, y * scl)
            rotate(v.heading());
            line(0, 0, scl, 0)
            pop()
            // rect(x * scl, y * scl, scl, scl)
            xoff += inc
        }

        yoff += inc

    }

    zoff += 0.02

    fr.html(floor(frameRate()))

}
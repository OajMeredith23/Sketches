// Oliver Meredith
// https://www.olivermeredith.com/

let r, doff = 0, plus = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    r = 0;
    background(0)
    angleMode(DEGREES)
}

function draw() {

    noStroke()
    fill(195)
    translate(width / 2, height / 2)
    // ellipse(0, 0, 5, 5)

    rotate(r)
    translate(5, 0)

    let d = map(noise(doff), 0, 1, 0, 10)
    ellipse(d + plus, 0, 2, 2)

    r += 2
    console.log(r)
    if (r % 360 === 0) {
        plus += 10
    }
    doff += 0.1

}
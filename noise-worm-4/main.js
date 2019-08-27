// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.01;
let xoff = 0, yoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');


}

function draw() {

    background(5)
    noStroke()

    let x = 100 * sin(xoff)
    let y = 100 * cos(xoff)

    for (let i = -75; i < height + 75; i++) {
        fill(
            127 + 127 * sin(i * 0.01 + xoff),
            27 + 127 * sin(i * 0.011 + xoff),
            127 + 127 * sin(i * 0.012 + xoff),
        )

        ellipse(
            width / 2 + 50 * noise(i * 0.03 + xoff),
            i,
            100 + 40 * sin(i * 0.01 + xoff * 2),
            100 + 40 * sin(i * 0.01 + xoff * 2)
        )

    }
    xoff += 0.07
}

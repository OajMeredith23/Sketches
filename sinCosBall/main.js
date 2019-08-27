// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.0149;
let xoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');


}

function draw() {
    background(0)
    stroke(255);
    noFill();
    beginShape();
    for (let i = 0; i < 50; i++) {
        let d = map(noise(i), 0, 1, -5, 5)
        let x = sin(d) * 200
        let y = map(cos(xoff + d), 0, 1, 0, 200);

        ellipse(width / 2, height / 2, x, y);

    }
    xoff += 0.02


    endShape();
}
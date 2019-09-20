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
    background(25)
    for (let y = 0; y < 3; y++) {
        push()
        translate(0, y * 180)
        for (let i = 0; i < 75; i++) {

            let c = map(i, 0, 175, 0, 255)

            for (let x = 0; x < width; x++) {
                let d = map(noise(xoff), 0, 1, -i * 1.2, i * 1.2)
                // console.log(c)
                translate(0, i * 0.00005)
                beginShape();
                stroke(225, 225, 225, c)
                strokeWeight(1.5)
                vertex(x, 75 + d)
                endShape(CLOSE)
                xoff += inc;
            }
        }
        pop()
    }
    noLoop();
}
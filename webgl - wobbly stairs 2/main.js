// Oliver Meredith
// https://www.olivermeredith.com/

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
console.log(canvasWidth)
let inc = 0;
let angle = 0
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth, WEBGL);
    canvas.parent('p5Sketch');


}

function draw() {
    background(25);
    noStroke()

    ambientLight(100, 50, 225)
    ambientMaterial(255)

    pointLight(255, 255, 255, 100, 100)

    // rotateY(Math.PI / 5)
    rotateX(-.7)

    // rotateY(-.5)
    translate(-width / 2, 0)

    for (let rows = 0; rows < width / 10; rows += 2) {
        push()
        translate(12 * rows, 0)
        for (let cols = 0; cols < height / 10; cols += 2) {
            translate(0, 10 * cols)
            box(10, 10, 10)
        }
        pop()
        // inc += 0.02
    }
}

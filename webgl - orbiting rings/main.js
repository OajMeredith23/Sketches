// Oliver Meredith
// https://www.olivermeredith.com/

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
console.log(canvasWidth)

let angle = 0
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth, WEBGL);
    canvas.parent('p5Sketch');


}

function draw() {
    background(225);
    noStroke()

    ambientLight(25)
    ambientMaterial(255)

    pointLight(255, 255, 255, 300 * cos(angle), 250 * sin(angle), 0)

    sphere(width / 10)
    pointLight(255, 255, 255, 0, -100, width / 2)

    for (let i = 0; i < 3; i++) {
        rotateY(map(sin(angle), 0, 1, 0, Math.PI))
        rotateX(map(cos(angle), 0, 1, 0, Math.PI))
        torus(width / 5 + (i * width / 20), 10)

    }

    angle += 0.009


}

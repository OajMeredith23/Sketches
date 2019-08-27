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
    background(225);
    noStroke()

    ambientLight(25)
    ambientMaterial(255)

    pointLight(255, 255, 255, 300 * cos(angle), 250 * sin(angle), 0)

    rotateY(1.2)
    rotateZ(-.15)
    rotateX(-.12)
    translate(50 + -width / 2, 0)

    for (let i = 0; i < 90; i++) {
        rotateX(frameCount / 200)
        push()
        translate(-100 + i * 140, 0)
        torus(90, 10)
        inc += 0.002
        pop()
    }

}

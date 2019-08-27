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

    ambientLight(225)
    ambientMaterial(255)

    // pointLight(255, 255, 255, 20 * cos(angle), 250 * sin(angle), 0)
    pointLight(255, 255, 255, -200, -400)

    rotateY(Math.PI / 2)
    // rotateX(-0.15)
    // rotateZ(-0.2)
    translate(500, -500)
    for (let i = 0; i < 20; i++) {

        push()

        translate(-i * 40, i * 30)
        let s = map(sin(inc + i), 0, 1, 20, 60)

        translate(s, 30)
        box(30, 5, 300)

        pop()
    }

    inc += 0.02

}

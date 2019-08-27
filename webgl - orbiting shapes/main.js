// Oliver Meredith
// https://www.olivermeredith.com/

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;

let angle = 0
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth, WEBGL);
    canvas.parent('p5Sketch');

    // createCanvas(500, 500, WEBGL)

}

function draw() {
    background(25);
    noStroke()
    // translate(0, 0, mouseY - height / 2)
    rotateY(map(mouseX, 0, width, 0, Math.PI));
    rotateX(map(mouseY, 0, height, 0, Math.PI));

    ambientLight(25)
    ambientMaterial(255)

    pointLight(255, 0, 155, 0, -100, width / 2)
    pointLight(255, 255, 255, 200 * cos(angle), 150 * sin(angle), 0)


    push()
    translate(-150, 0)
    torus(40);
    pop();

    push()
    translate(0, 0)
    sphere(50);
    pop();

    push()
    translate(150, 20)
    rotateX(.8)
    rotateZ(.7)
    cone(50, 70);
    pop();

    angle += 0.03


}

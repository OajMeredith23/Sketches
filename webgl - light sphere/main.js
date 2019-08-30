// Oliver Meredith
// https://www.olivermeredith.com/

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
console.log(canvasWidth)

let angle = 0
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth * 1.5, WEBGL);
    canvas.parent('p5Sketch');


}

function draw() {
    background(25);
    noStroke()

    ambientMaterial(255)


    pointLight(
        0,
        10,
        255,
        map(sin(angle), 0, 1, 0, width),
        map(sin(angle), 0, 1, 0, height)
    )
    pointLight(
        200,
        0,
        55,
        map(sin(angle), 0, 1, width, 0),
        map(sin(angle), 0, 1, 0, height)
    )

    pointLight(
        240,
        240,
        240,
        map(sin(angle), 0, 1, 0, 2000),
        map(sin(angle), 0, 1, height, 0)
    )



    sphere(width / 5)


    angle += 0.02


}

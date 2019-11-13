// Oliver Meredith
// https://www.olivermeredith.com/
let theta = 0
const strands = 50;
let diam = 720;
let inc = 0;

let x_rotation = 0, y_rotation = 0, z_rotation = 0;
let x_coord = [], y_coord = [], z_coord = [];

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
canvasHeight = canvasParent.offsetHeight;

function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent('p5Sketch');

    diam = width / 2
    x_rotation = random(-1, 1)
    y_rotation = random(-1, 1)
    z_rotation = random(-1, 1)

    for (let i = 0; i < strands; i++) {
        x_coord[i] = random(diam)
        y_coord[i] = random(diam)
        z_coord[i] = sqrt(pow(diam / 2, 2) - pow(x_coord[i], 2) - pow(y_coord[i], 2))
        console.log(z_coord)
    }

    background(235)
    noFill()
    // stroke(35)
    frameRate(120)
}

function draw() {
    // background(235, 1)
    // stroke(0)

    // translate(width / 2, height / 2)
    rotateX(x_rotation * theta)
    rotateY(y_rotation * theta)
    rotateZ(z_rotation * theta)


    for (let j = 0; j < strands; j++) {
        stroke(map(y_coord[j], 300, height - 300, 0, 255))
        strokeWeight(2 * (z_coord[j] + 0.5 * diam) / (0.5 * diam))
        point(x_coord[j], y_coord[j], z_coord[j])
    }

    theta += TWO_PI / 280
}
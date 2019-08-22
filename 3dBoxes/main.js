// Oliver Meredith
// https://www.olivermeredith.com/

let angle = 0;
let w = 48;
let ma;
let maxD;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth, WEBGL);
    canvas.parent('p5Sketch');
    ma = atan(1 / sqrt(2))
    maxD = dist(0, 0, 200, 200)
}

function draw() {
    background(100);
    ortho(-500, 500, -500, 500, 0, 700);
    // directionalLight(255, 0, 255, 0, -1, 0)
    // translate(0, 50, -50)
    rotateX(-QUARTER_PI);
    rotateY(ma);

    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width / 2, height / 2)
            let offset = map(d, 0, maxD, -2, 2);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 20, 200);
            translate(x - width / 2, 0, z - height / 2);
            // ambientMaterial(155, 0, 0)
            normalMaterial()
            box(w - 2, h, w - 2);
            // rect(x - width / 2 + w / 2, 0, w - 2, h);
            pop();
        }
    }

    angle += 0.1;
}
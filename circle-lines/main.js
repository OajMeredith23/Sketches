// Oliver Meredith
// https://www.olivermeredith.com/

let inc = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    background(235)



    noFill();

    angleMode(DEGREES)
}


function draw() {
    background(235, 55)
    stroke(25, 55)
    translate(width / 2, height / 2)
    for (let i = 0; i < 400; i++) {

        let x = -sin(i) * width / 4
        let y = cos(i) * width / 4

        line(x, y, x, -min(i, 100) + noise(inc * i * 0.05) * 150)

    }

    inc += 0.02
}
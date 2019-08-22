// Oliver Meredith
// https://www.olivermeredith.com/

let spacing, x = 0, y = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    spacing = 10;
}
function draw() {


    stroke(25);
    if (random(1) < 0.5) {
        line(x, y, x + spacing, y + spacing);
    } else {
        line(x, y + spacing, x + spacing, y);
    }

    x = x + spacing;

    if (x > width) {
        x = 0;
        y = y + spacing;
    }
};

function mousePressed() {
    save('perlinDots.jpg');
}
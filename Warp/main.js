// Oliver Meredith
// https://www.olivermeredith.com/


let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}
function draw() {

    for (let x = 0; x < width / 10; x++) {
        for (let y = 0; y < height / 10; y++) {
            line(x * 10, y * 10, x * 5, y * 5)
        }
    }

    noLoop();
};

function mousePressed() {
    save('perlinDots.png');
}
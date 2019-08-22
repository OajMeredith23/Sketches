// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.01;
var red = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}
const run = function draw() {
    space = 4;

    noStroke();

    var yoff = 0;
    for (var y = 0; y < 200; y++) {
        var xoff = 1;
        for (var x = 0; x < 250; x++) {

            var d = map(noise(xoff, yoff), 0, 1, 2, 6);
            fill(map(d, 2, 8, 35, 135));
            ellipse((x * d) - 45, (y * d) - 45, space, space);

            xoff += inc * 0.9;
        }
        yoff += inc;
    }
    noLoop();
};

setInterval(() => {
    run()
}, 10)

function mousePressed() {
    save('perlinDots.png');
}
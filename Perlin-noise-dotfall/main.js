// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.02;
let xoff = 0, yoff = 0;
let space = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    background(25);
    fill(215);

    noStroke();
    // translate(50, 50);

    var yoff = 0;
    for (var y = 10; y < height / 6; y++) {

        var xoff = 1;
        for (var x = 5; x < width / 15 - 5; x++) {

            var d = map(noise(xoff, yoff), 0, 1, 5, 7);
            ellipse((x * 15), (y * d / 1.2), 3, 3);

            xoff += inc;
        }
        yoff += inc;
    }


}
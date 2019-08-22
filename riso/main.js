// Oliver Meredith
// https://www.olivermeredith.com/


let blue;
let yellow;
let red;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    pixelDensity(1);
    // blendMode(MULTIPLY);
    noStroke();

    red = new Riso("red");
    blue = new Riso("blue");
    yellow = new Riso("yellow");

    colorGrid(red, 0);
    colorGrid(yellow, 90);
    colorGrid(blue, 270);
    // yellow.fill(100);
    // yellow.ellipse(0, 0, 200, 200);
    drawRiso();
}

function draw() {


}

function mouseClicked() {
    exportRiso();
}

function colorGrid(layer, angle) {
    deg = angle * (PI / 180);
    layer.push();
    layer.translate(299, 299);
    layer.rotate(deg);
    layer.translate(-299, -299);
    //GRID
    layer.noStroke();
    for (var x = 0; x < 20; x++) {
        for (var y = 0; y < 20; y++) {
            let a = map(y, 0, 19, 255, 0);
            let w = map(x, 0, 20, 50, 550);
            let h = map(y, 0, 20, 50, 550);
            layer.fill(a);
            layer.rect(w, h, 23, 23);

            //key
            if (w > 510) { //only draw edge strip once 
                layer.rect(550 + 30, h, 23, 23);
            }
        }
    }
    layer.pop();
}
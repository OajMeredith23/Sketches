// Oliver Meredith
// https://www.olivermeredith.com/


let phase = 0;
let zoff = 0;
let slider;
let noiseMax = 2
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    // slider = createSlider(0, 10, 3, 0.1);

}



function draw() {
    background(235);
    stroke(25);
    strokeWeight(.5);
    // fill(245)
    noFill();

    translate(width / 2, height / 2);

    beginShape();
    for (let i = 0; i < 10; i++) {

        for (let a = 0; a < TWO_PI; a += 0.006) {
            let xoff = map(cos(a), -1, 1, 4, 5);
            let yoff = map(sin(a), -1, 1, 4, 5);
            let r = map(noise(xoff, yoff, zoff), 0, 1, 50, 50 + i * 8);
            let x = r * cos(a);
            let y = r * sin(a);

            // console.log(map(noise(xoff, yoff), -1, 1, 0, 2))
            random() > 0.5 ? ellipse(x, y, 1, 1) : null

            vertex(x, y);
        }
    }
    endShape();
    phase += 0.01;
    zoff += 0.02;


    // noLoop()
}
// Oliver Meredith
// https://www.olivermeredith.com/


let zoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

}



function draw() {
    background(235);
    stroke(15);
    strokeWeight(1);
    // fill(245)
    noFill();

    translate(width / 2, height / 2);


    for (let i = 0; i < width / 50; i++) {
        beginShape();

        for (let a = 0; a < TWO_PI; a += 0.008) {
            let xoff = map(cos(a), -1, 1, 4, 5);
            let yoff = map(sin(a), -1, 1, 4, 5);

            let r = map(noise(xoff, yoff, zoff), 0, 1, 50, 50 + i * 20);
            let x = r * cos(a);
            let y = r * sin(a);

            random() > 0.4 ? ellipse(x, y, 1, 1) : null

            vertex(x, y);
        }
        endShape();
    }
    zoff += 0.008;
}

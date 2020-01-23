// Oliver Meredith
// https://www.olivermeredith.com/


let zoff = 0, inc = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    background(35);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(35))
            point(x, y)
        }
    }

    for (let j = 0; j < 15; j++) {
        let size = map(j, 0, 10, 50, 850)
        stroke(235, 15)
        noFill()
        ellipse(width / 2, height / 2, size, size)

    }
}



function draw() {
    stroke(235, 14)
    strokeWeight(1);
    // fill(245)
    noFill();

    let xPos = map(noise(inc), -1, 1, 300, width - 300)
    let yPos = map(noise(inc * 0.5), -1, 1, 300, height - 300)
    translate(xPos, yPos)
    // translate(width / 2, height / 2)
    // translate(width / 2 + noise(inc) * 500, height / 2 + noise(inc) * 500);


    // for (let i = 0; i < width / 50; i++) {
    beginShape();

    for (let a = 0; a < TWO_PI; a += 0.006) {
        // stroke(map(sin(a * 0.2), -1, 1, 10, 235), 15);
        let xoff = map(cos(a), -1, 1, 0, 1);
        let yoff = map(sin(a), -1, 1, 0, 1);

        let r = map(noise(xoff, yoff, zoff), 0, 1, min(width / 2 - 50, min(400 - frameCount * 0.5, 400)), 0);
        let x = r * cos(a);
        let y = r * sin(a);

        fill(235, 150)
        let size = random(2)
        random() > 0.999 ? ellipse(x, y, size, size) : null
        noFill()
        vertex(x, y);
    }
    endShape();
    // }
    zoff += 0.002;

    inc += 0.00
}

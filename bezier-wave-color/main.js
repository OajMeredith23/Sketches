// Oliver Meredith
// https://www.olivermeredith.com/



let zoff = 0;

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;


const margin = {}
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
canvasHeight = canvasParent.offsetHeight;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');

    pixelDensity(1)

    margin.left = width / 10
    margin.top = height / 10
    margin.right = width - width / 10
    margin.bottom = height - height / 10

    x1 = width + 200;
    y1 = height;
    x2 = -200;
    y2 = 0;
    // x3 = width;
    y3 = 0;

}



function draw() {
    // background(48, 106, 137);
    background(235);
    // noStroke()
    // stroke(237, 138, 99)
    stroke(55, 55)
    noFill()


    let numLines = 540;
    for (let i = 0; i < numLines; i++) {
        // x1 = map(, 0, numLines, margin.left, margin.right)
        // y1 = 50
        // x2 = map(i, 0, numLines, margin.left, margin.right)
        // y2 = height - 50
        // y1 = map(sin(zoff + i * 0.002), -1, 1, 0, height)
        // x1 = map(cos(zoff + i * 0.02), -1, 1, margin.left, margin.right)
        x1 = map(noise(zoff + i * 0.02), 0, 1, width + 200, width + 400)
        // y2 = map(cos(zoff + i * 0.002), -1, 1, 0, height)
        x2 = map(noise(zoff + i * 0.02), 0, 1, -400, -200)

        let yPos = map(i, 0, numLines, -200, height + 200)
        // let yPos = height / 2
        // y1 = mouseY
        // noFill()
        // ellipse(100, yPos, 4, 4)
        let r = map(sin(i * zoff * 0.006), -1, 1, 0, 105)
        let g = map(cos(i * zoff * 0.002), -1, 1, 0, 45)
        let b = map(noise(i * zoff * 0.004), 0, 1, 50, 155)
        let a = map(noise(i * zoff * 0.005), 0, 1, 0, 155)
        stroke(r, g, b, a)
        strokeWeight(1)
        // strokeWeight(map(i, 0, 100, 1, 3))

        // noStroke()
        // fill(55, 55)
        ellipse(x1, y1, 4, 4)
        // fill(0, 0, 255)
        ellipse(x2, y2, 4, 4)
        // ellipse(x3, y3, 4, 4)
        noFill()


        beginShape();
        vertex(0, yPos);
        bezierVertex(
            x1,
            y1,
            x2,
            y2,
            width,
            yPos
        );

        // fill(255, 0, 0)
        // ellipse(x1, y1, 4, 4)
        // fill(0, 0, 255)
        // ellipse(x2, y2, 4, 4)
        // ellipse(x3, y3, 4, 4)
        noFill()

        // bezierVertex(0, (i * 10), i * 20, 0, width, height / 2 - yPos * 2);
        endShape();
    }

    // noLoop()
    zoff += 0.02
}

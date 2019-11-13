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


    margin.left = width / 10
    margin.top = height / 10
    margin.right = width - width / 10
    margin.bottom = height - height / 10

    x1 = width / 3;
    y1 = margin.top;
    x2 = width - width / 3;
    y2 = margin.top;
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


    let numLines = 140;
    for (let i = 0; i < numLines; i++) {
        let yPos = map(i, 0, 140, margin.top, margin.bottom)
        // y1 = mouseY
        // noFill()
        // ellipse(100, yPos, 4, 4)
        strokeWeight(map(i, 0, 100, 1, 3))

        // noStroke()
        // fill(55, 55)
        ellipse(x1, y1, 4, 4)
        // fill(0, 0, 255)
        ellipse(x2, y2, 4, 4)
        // ellipse(x3, y3, 4, 4)
        noFill()


        beginShape();
        vertex(margin.left, yPos);
        bezierVertex(
            x1,
            y1,
            x2,
            y2,
            margin.right,
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
    zoff += 0.01
}

let mode = 0;
function mousePressed() {
    // console.log(mouseX, mouseY)

    if (mode % 2 === 0) {
        x1 = mouseX
        y1 = mouseY
        console.log("1")

    } else {
        console.log("2")
        x2 = mouseX
        y2 = mouseY
    }

    mode++
}
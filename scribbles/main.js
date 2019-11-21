// Oliver Meredith
// https://www.olivermeredith.com/

let xPos = 0, yPos = 0
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    noFill()
    frameRate(1)
}


function draw() {
    background(235, 125)

    for (let x = 0; x < 9; x++) {
        translate(80, 0)
        push()
        for (let y = 0; y < 9; y++) {
            translate(0, 80)

            for (let i = 0; i < 10; i++) {

                rect(0, 0, 60, 60)
                if (i % 3 === 0) {
                    stroke(0, 255, 0)
                } else if (i % 2 === 0) {
                    stroke(255, 0, 0)
                } else if (i % 4) {
                    stroke(0, 0, 255)
                }



                push()
                beginShape()

                for (let j = 0; j < 3; j++) {
                    xPos = random(60)
                    yPos = random(60)
                    vertex(xPos, yPos)
                }
                pop()
                endShape(CLOSE)

            }

        }
        pop()
    }
    if (i === 0) {
        stroke(255, 0, 0)
    } else if (i === 2) {
        stroke(0, 255, 0)
    } else if (i === 3) {
        stroke(0, 234, 255)
    }

    noLoop()
}
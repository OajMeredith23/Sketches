// Oliver Meredith
// https://www.olivermeredith.com/

let inc = 0;
let sizeX;
let sizeY;
let spacing = 15
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    background(35)
    noFill()
    rectMode(CENTER)
}

function draw() {

    // background(35, 35, 35, 35)

    stroke(225, 225, 225, 55)
    translate(10, 10)


    // for (let i = 0; i < 5; i++) {
    //     if (i > 0) {

    //         translate(0, 150)
    //     }

    for (let j = 0; j < height; j++) {
        // beginShape()

        // vertex(20, j * spacing)
        for (let a = 0; a < width; a++) {

            let d = map(noise(a + inc), 0, width, -50, 50)

            point(map(a, 0, 50, 20, width - 20), map(j, 0, 50, 20, height - 20))

        }
        // vertex(width - 20, j * spacing)

        // endShape()
    }

    // }

    inc += 0.02
}
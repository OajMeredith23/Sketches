// Oliver Meredith
// https://www.olivermeredith.com/


let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth,
    canvasHeight = canvasParent.offsetHeight;

let inc = 0
function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');
    noFill()
}



function draw() {
    background(235)
    let scrollPos = window.scrollY

    // stroke(25, map(scrollPos, 0, window.innerHeight, 255, 0))
    for (let i = 0; i < 5; i++) {

        // let yStart = map(i, 0, 20, 0, window.innerHeight)
        beginShape()
        for (let x = 0; x < width; x++) {

            let diff = 0;
            if (scrollPos < window.innerHeight) {
                diff = map(scrollPos, 0, window.innerHeight, noise(x * 0.02, scrollPos * 0.00002 + inc, i * 20), 0)
            } else {
                diff = 0
            }

            yPos = map(diff, -1, 1, 0, window.innerHeight / 2)
            vertex(x, yPos + i * 10)

            fill(0)
            random(1000) > 600 ? ellipse(x, yPos + i * 10, 2, 2) : null
            noFill()

        }
        endShape()
    }

    inc += 0.002
}
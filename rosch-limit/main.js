// Oliver Meredith
// https://www.olivermeredith.com/

let incx = 0, inc = 0, y = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    background(25)


}


function draw() {
    background(25)

    let size = width / 10
    for (let i = 0; i < 8000; i++) {
        noFill()
        stroke(235)
        // fill(235)
        let x = map(sin(incx), 0, 1, -size, size)
        let y = map(cos(incx), 0, 1, -size, size)
        let d = map(random(), 0, 1, 0, inc)
        let r = random() * inc

        let xPos = x + random() * d
        let yPos = y + random() * d

        stroke(235, 235, 235,
            225
        )
        push()
        translate(width / 4 + size, width / 4 + size)
        point(xPos, yPos)
        pop()
        incx += 0.05
        incx += 0.05
    }

    inc += 20
}
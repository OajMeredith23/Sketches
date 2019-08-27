// Oliver Meredith
// https://www.olivermeredith.com/

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
console.log(canvasWidth)
let inc = 0;
let angle = 0;
let margin = {}
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    margin = {
        top: -100,
        left: 30,
        right: 0,
        bottom: 20
    }

}

function draw() {
    background(5)
    noStroke()
    fill(235)


    for (let x = 0; x < 20; x++) {
        let xPos = map(x, 0, 20, margin.left, width - margin.right)
        for (let y = 0; y < 40; y++) {
            let yPos = margin.top + y * 25 + map(sin(inc + x), 0, 1, 20, -20)
            let size = map(cos(inc + y / TWO_PI), 0, 1, 0, 20)

            let color = map(size, 15, 20, 100, 50)
            fill(color, color / 4, 50)

            ellipse(xPos, yPos, size, size)
        }
    }


    inc += 0.02
}

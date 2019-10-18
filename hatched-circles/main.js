// Oliver Meredith
// https://www.olivermeredith.com/

let inc = 0, length;
let xoff = 0, yoff = 0, zoff = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    background(25)

    noFill()

    length = 20


}

function draw() {

    translate(width / 2, height / 2)
    for (let circle = 0; circle < 30; circle += 2) {
        let drawPos = 10
        for (let i = 0; i < TWO_PI; i += 0.05) {
            let c = color(map(noise(inc, i, circle), 0, 1, 100, 250), map(noise(inc, i, circle), 0, 1, 255, 100), map(noise(inc, i, circle), 0, 1, 255, 100))
            stroke(c)
            let cx = map(sin(i), -1, 1, -drawPos, drawPos)
            let cy = map(cos(i), -1, 1, -drawPos, drawPos)

            push()
            translate(cx * circle, cy * circle)

            beginShape();
            vertex(0, 0);

            for (let d = 0; d < 5; d++) {

                let diff = map(noise(d, i, circle), 0, 1, -3, 3)
                vertex(cx / d + diff, cy / d + diff)

            }
            vertex(cx, cy)
            endShape()

            pop()

        }
        inc += 0.2
    }
    noLoop()
}

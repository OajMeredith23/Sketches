// Oliver Meredith
// https://www.olivermeredith.com/

let xoff = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    noStroke()

    translate(10, 10)
    fill(70)
    for (let k = 0; k < 5; k++) {

        for (let l = 0; l < 5; l++) {
            push()
            translate(140 * l, 140 * k)

            for (let i = 0; i < 40; i++) {

                let s = 50 * sin(i)
                let c = 50 * cos(i)
                let d = map(noise(xoff), 0, 1, -15, 5)

                for (let j = 0; j < 10; j++) {

                    let s = 20 * sin(i)
                    let c = 20 * cos(i)

                    ellipse(60 + s + d, 60 + c + d, 2, 2)

                }

                xoff += 0.2
            }

            pop()
        }
    }

}

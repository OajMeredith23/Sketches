// Oliver Meredith
// https://www.olivermeredith.com/

let inc = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    noStroke()
    background(235)
    fill(70)



}

function draw() {
    translate(width / 2, height / 2)
    background(235)
    for (let i = 0; i < 720; i++) {
        for (let j = 0; j < 10; j++) {

            let s = j * 20 * sin(i)
            let c = j * 20 * cos(i)

            let size = 5;
            console.log(inc)
            if (j == Math.floor(inc) && i == Math.floor(inc)) {
                size = 10;
            }
            ellipse(s, c, size, size)

        }



    }

    if (inc > 10) {
        inc = 0;
    }
    inc += 0.2

}

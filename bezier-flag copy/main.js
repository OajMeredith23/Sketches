// Oliver Meredith
// https://www.olivermeredith.com/



let inc = 0.02;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
canvasHeight = canvasParent.offsetHeight;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');



}



function draw() {
    background(25)
    fill(15)
    noStroke()
    ellipse(width / 2, height / 2, 600, 600)
    stroke(235, 125)
    noFill()
    translate(width / 2, 0)
    for (let y = 0; y < 400; y++) {
        // let s = map(cos(y * 0.3 + inc), 0, 1, -20, 20)
        let size1 = map(cos(y * 0.02 + inc), 0, 1, 50, 100)
        let size2 = map(sin(y * 0.02 + inc * 2), 0, 1, 50, 100)
        let s = map(cos(y + inc), 0, 1, -10, 10)

        stroke(map(sin(y * 0.003 + (inc / 2)), 0, 1, 155, 225), 125)
        ellipse(0, map(y, 0, 400, 100, height - 100), size1, size2)
        // for (let x = 1; x < 3; x++) {


        // }
    }

    inc += 0.02
}
// Oliver Meredith
// https://www.olivermeredith.com/


let inc = 0, inc2 = 0;
let incR = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    margin = 90
    background(235)
    fill(235, 255)

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(35))
            point(x, y)
        }
    }
}



function draw() {

    translate(width / 2, height / 2)

    let drawX = map(sin(inc), -1, 1, width / 5, width / 3)

    let drawY = map(cos(inc2), -1, 1, height / 5, height / 3)

    push()
    rotate(map(noise(incR), -1, 1, 0, 24))
    stroke(235, 155)
    point(drawX, drawY)
    noStroke()
    random() > 0.1 ? ellipse(drawX, drawY, 1, 1) : null
    pop()


    inc += 0.02
    inc2 += 0.04
    incR += 0.002

}

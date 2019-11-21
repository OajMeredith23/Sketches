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
    background(35)
    // noStroke()
    fill(15, 55)
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(35))
            point(x, y)
        }
    }
}



function draw() {
    fill(235, 255)
    stroke(235, 255)

    strokeWeight(0.1)

    translate(width / 2, height / 2)
    for (let i = 0; i < 10000; i++) {
        let drawX = map(sin(inc), -1, 1, -250, 250)

        let drawY = map(cos(inc2), -1, 1, -250, 250)

        push()
        rotate(incR)

        point(drawX, drawY)
        random() > 0.8 ? ellipse(drawX, drawY, 2, 2) : null
        pop()

        inc += 0.8
        inc2 += 0.9
        incR += 0.2

    }
    noLoop()
}

function mousePressed() {
    save('space.png')
}
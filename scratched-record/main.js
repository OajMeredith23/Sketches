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
    fill(255, 55)

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(35))
            point(x, y)
        }
    }
}



function draw() {


    translate(width / 2, height / 2)

    for (let i = 0; i < 350000; i++) {
        // stroke(255, map(i, 0, 450000, 0, 55))

        let drawX = map(sin(inc), -1, 1, -200, 200)

        let drawY = map(cos(inc2), -1, 1, -200, 200)

        push()
        rotate(map(noise(incR), -1, 1, 0, 9))
        stroke(255, 35)
        point(drawX, drawY)
        noStroke()
        random() > 0.9 ? ellipse(drawX, drawY, 2, 2) : null
        pop()


        inc += 0.01
        inc2 += 0.02
        incR += 0.0002

    }
    noLoop()
}

function mousePressed() {
    save('space.png')
}
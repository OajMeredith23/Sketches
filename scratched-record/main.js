// Oliver Meredith
// https://www.olivermeredith.com/


let inc = 0, inc2 = 0;
let incR = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(1500, 2250);
    canvas.parent('p5Sketch');
    margin = 90
    background(35)

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(35))
            point(x, y)
        }
    }

    // noStroke()
    // for (let a = 0; a < 3; a++) {
    //     for (let b = 0; b < 3; b++) {
    //         fill(150 - random(100), 105)
    //         let size = random(250)
    //         ellipse(random(width), random(height), size, size)
    //     }

    // }

    fill(235, 55)

    translate(width / 2, height / 2)

    for (let i = 0; i < 340000; i++) {

        let drawX = map(sin(inc), -1, 1, 100, 400)

        let drawY = map(cos(inc2), -1, 1, 100, 400)

        push()
        rotate(map(noise(incR), -1, 1, 0, 24))
        stroke(235, 55)
        point(drawX, drawY)
        noStroke()
        random() > 0.9 ? ellipse(drawX, drawY, 1, 1) : null
        pop()


        inc += 0.0005
        inc2 += 0.0006
        incR += 0.003

    }
}



function mousePressed() {
    save('space.png')
}
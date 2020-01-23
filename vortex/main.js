// Oliver Meredith
// https://www.olivermeredith.com/


let zoff = 0, inc = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

    background(35);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(35))
            point(x, y)
        }
    }

    stroke(235, 255)
    fill(185)
    // ellipse(0, 0, 600, 600)
    noFill()
    blendMode(SCREEN)
    translate(width / 2, height / 2)
    push()
    rotate(2.5)
    for (let i = 0; i < 64000; i++) {
        rotate(i * 0.0000001)
        strokeWeight(1)

        let yPos = map(sin(i * 0.003), -1, 1, -50, 200)
        let xPos = map(cos(i * 0.008), -1, 1, -50, 200)
        // let size = map(cos(i * 0.004), -1, 1, 0, 100)
        let c = map(sin(i * 0.009), -1, 1, 55, 150)
        let c1 = map(cos(i * 0.008), -1, 1, 70, 250)
        let c2 = map(noise(i * 0.007), -1, 1, 145, 255)

        stroke(c, c1, c2, 255)
        point(xPos, yPos)

        strokeWeight(0.2)

        for (let j = 0; j < 5; j++) {
            // stroke(255 - random(145), 95)
            stroke(c, c1, c2, 95)
            point(xPos * 1.2 + random(xPos * 2), yPos * 1.2 + random(yPos * 2))

        }

    }
    pop()
}



function mousePressed() {
    save('galaxy.png')
}

// Oliver Meredith
// https://www.olivermeredith.com/


let zoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');

}



function draw() {
    background(15);
    // stroke(235);
    // strokeWeight(0.5);
    fill(235)


    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            stroke(random(55), random(55), random(55))
            point(x, y)

        }

    }





    fill(235)
    noStroke()
    // stroke(235)
    translate(width / 2, height / 2);
    for (let i = 0; i < 60; i++) {

        for (let a = 0; a < TWO_PI; a += 0.008) {
            let r = i * 5
            let x = r * cos(a);
            let y = r * sin(a);
            let size = map(a, 0, TWO_PI, 3, 0)
            fill(random(255), random(255), random(255))
            // stroke(random(255), random(255), random(255))

            random() > 0.5 ? ellipse(x, y, size, size) : null
        }
    }
    zoff += 0.008;

    noLoop()
}

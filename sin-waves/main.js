// Oliver Meredith
// https://www.olivermeredith.com/

let xoff = 0;
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}
function draw() {
    background(50)
    noStroke()
    let c = 200 * cos(xoff)

    for (let i = 0; i < width / 5; i++) {
        let s = map(sin(i * 5 + xoff), 0, 1, -100, 100)
        let c = map(cos(i * 5 + xoff), 0, 1, -30, 50)


        fill(255, 100, 255, 250)
        ellipse(i * 5, height / 2, 5, s)
        fill(50)
        ellipse(i * 5, height / 2, 5, c)

    }

    xoff += 0.009

};

function mousePressed() {
    save('perlinDots.png');
}
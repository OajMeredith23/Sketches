// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.0149;
let xoff = 0;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
}

function draw() {
    background(245)
    for (let i = 0; i < 5; i++) {
        for (let x = 0; x < width; x++) {
            let d = map(noise(xoff), 0, 1, -100, 100)
            let c = map(noise(xoff), 0, 1, 255, 55)
            beginShape();
            stroke(c, 0, c)
            vertex(x, width / 2 + d)
            endShape(CLOSE)
            xoff += inc;
        }
    }
    noLoop();
}
// function draw() {
//     space = 4;

//     // noStroke();

//     var xoff = 0;
//     var yoff = 0;
//     for (var x = 0; x < 50; x++) {
//         // var yoff = 0;
//         xPos = map(noise(xoff), 0, 1, 0, 200);
//         yPos = map(noise(yoff), 0, 1, 0, 200);
//         ellipse(xPos, yPos, space, space);

//         // for (var y = 0; y < 50; y++) {
//         //     yPos = map(noise(yoff), 0, 1, 0, height);
//         //     console.log(yPos)

//         //     fill(155, 155, 155, 0.5);
//         //     ellipse(xPos, yPos, space, space);

//         //     yoff += inc;
//         // }
//         xoff += inc * 0.9;
//         yoff += inc * 2;
//     }
//     noLoop();
// };

function mousePressed() {
    save('perlinDots.png');
}
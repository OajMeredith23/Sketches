// Oliver Meredith
// https://www.olivermeredith.com/

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;


let inc = 0.2;
let scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield = [];
let fr;
let disturbance = 1;
let magnitude = 0.5;
let c = 0;

let disturbanceSlider, magSlider;

function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    // colorMode(HSB, 255);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');

    flowfield = new Array(cols * rows);

    createP('Disturbance')
    disturbanceSlider = createSlider(0, 100, 50)
    disturbanceSlider.value(0);

    createP('Magnitude')
    magSlider = createSlider(0, 100, 50)
    magSlider.value(0);

    for (var i = 0; i < 1300; i++) {
        particles[i] = new Particle();
    }
    background(0);
}

function draw() {
    background(0, 7);
    disturbance = map(disturbanceSlider.value(), 0, 100, 0.1, 5)
    magnitude = map(magSlider.value(), 0, 100, 0.5, 25)
    console.log(disturbance)

    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;
            if (disturbance < 1) {
                var angle = sin(xoff, yoff, zoff) * 0.3;
            } else if (disturbance > 1 && disturbance < 2) {
                var angle = sin(noise(xoff, yoff, zoff)) * TWO_PI * 0.5;
            } else if (disturbance > 2) {
                var angle = noise(xoff, yoff, zoff) * TWO_PI * disturbance
            }
            var v = p5.Vector.fromAngle(angle);
            v.setMag(magnitude);
            flowfield[index] = v;
            xoff += inc;
            // stroke(255);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, scl, 0);
            // pop();
            c = map(disturbance, 15, 20, 0, 255)
        }
        yoff += inc / 2;

        zoff += disturbance * 0.002;
    }


    // console.log(r)

    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show(c);
    }

}
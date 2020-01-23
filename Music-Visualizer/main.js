// Oliver Meredith
// https://www.olivermeredith.com/
let mic, fft, zoff = 0;
let spectrums = []
let levels = []
let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;

function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    noFill();

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
    amp = new p5.Amplitude();
    amp.setInput(mic)
    background(35)
    // for (let x = 0; x < width; x++) {
    //     for (let y = 0; y < height; y++) {
    //         fill(random(35))
    //         point(x, y)
    //     }
    // }
}

let inc = 0
function draw() {
    let spectrum = fft.analyze();
    let level = map(amp.getLevel(), 0, 1, 0, 400);

    if (inc % 0 !== 0) {
        background(35)
        levels.push(floor(level))
        noFill();

        translate(width / 2, height / 2);


        beginShape();
        stroke(235, 150)
        fill(235)
        strokeWeight(1)

        for (let a = 0; a < TWO_PI; a += 0.008) {
            let pos = floor(map(a, 0, TWO_PI, 0, levels.length))
            // let xoff = map(cos(a), -1, 1, 4, 5);
            // let yoff = map(sin(a), -1, 1, 4, 5);

            let r = map(levels[pos], 0, 400, 20, 220)

            let x = r * cos(a) * 3;
            let y = r * sin(a) * 3;

            // random() > 0.4 ? ellipse(x, y, 1, 1) : null

            vertex(x, y);
        }
        endShape(CLOSE);
        // }
        zoff += 0.008;

        let waveform = fft.waveform();
        // console.log(waveform)
        beginShape();
        noFill()
        stroke(235, 50)
        strokeWeight(3)

        for (let a = 0; a < TWO_PI; a += 0.008) {
            let pos = floor(map(a, 0, TWO_PI, 0, waveform.length))
            // let xoff = map(cos(a), -1, 1, 4, 5);
            // let yoff = map(sin(a), -1, 1, 4, 5);

            let r = map(waveform[pos], 0, 1, 20, 160)

            let x = r * cos(a) * 3;
            let y = r * sin(a) * 3;

            random() > 0.8 ? ellipse(x, y, 1, 1) : null

            vertex(x, y);
        }
        endShape(CLOSE);

        beginShape();
        stroke(235, 30)
        strokeWeight(1)
        // for (let a = 0; a < TWO_PI; a += 0.008) {
        //     let pos = floor(map(a, 0, TWO_PI, 0, spectrum.length))

        //     let r = map(spectrum[pos], 0, 1, 40, 60)

        //     let x = r * cos(a) * 3;
        //     let y = r * sin(a) * 3;

        //     random() > 0.8 ? ellipse(x, y, 1, 1) : null

        //     vertex(x, y);
        // }
        // endShape(CLOSE);

    }
    inc++
}

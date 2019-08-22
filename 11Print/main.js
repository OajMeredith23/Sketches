// Oliver Meredith
// https://www.olivermeredith.com/

var inc = 0.1, x = 0, y = 0, maze;

let canvasParent = document.getElementById('p5Sketch'),
    canvasWidth = canvasParent.offsetWidth;
function setup() {
    var canvas = createCanvas(canvasWidth, canvasWidth);
    canvas.parent('p5Sketch');
    maze = new Maze();
    console.log(maze)
}

function draw() {
    let size = 40;
    maze.show(x, y, size)

    x += size;
    if (x > width) {
        x = 0;
        y += size;
    }
};


function mousePressed() {
    save('perlinDots.png');
}
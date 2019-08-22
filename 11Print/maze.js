
function Maze() {

    this.show = function (x, y, size) {
        fill(255);
        noStroke();
        rect(x, y, size, size);
        stroke(0);
        strokeWeight(2)

        stroke(200, 0, 0)


        // translate(0, size)

        if (random(1) > .5) {
            line(x, y, x + size, y + size)
            line(x + size, y, x + size * 2, y + size)
        } else {
            line(x, y, x, y + size)
            line(x + size, y, x + size, y + size)
        }
    }
}
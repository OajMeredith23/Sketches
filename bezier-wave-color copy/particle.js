function Particles(x, y) {

    this.x = x,
        this.y = y;

    this.show = function (move) {
        let d = sin(move) * 100
        point(this.x + d, this.y)
    }
}
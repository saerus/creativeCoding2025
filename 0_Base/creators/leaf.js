class Arrow {
    constructor() {
        rect(0, 0, 100, 100);
    }
    draw() {
        this.animate += 0.1;
        this.pos = p5.Vector.lerp(this.start, this.end, this.animate);
        line(this.start.x, this.start.y, this.pos.x, this.pos.y);
    }
}
export { Arrow }
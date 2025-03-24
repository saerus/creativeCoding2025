class Arrow {
    constructor(start) {
        this.animate = 0;
        this.start = start.copy();
        this.end = this.start.copy()
        this.end.add(p5.Vector.random2D().mult(100));
        // this.end.add(100, 100);
    }
    draw() {
        this.animate += 0.1;
        this.pos = p5.Vector.lerp(this.start, this.end, this.animate);
        line(this.start.x, this.start.y, this.pos.x, this.pos.y);
        push();
        translate(this.start.x, this.start.y);
        triangle(t);
        pop();
    }
}
export { Arrow }
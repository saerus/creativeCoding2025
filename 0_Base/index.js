// P5JS preload
function preload() {
}
// user input
function mousePressed() {
}
// drawGid
// P5JS setup
function setup() {
    canvas = createCanvas(windowWidth, windowHeight, "P3D");
    setAttributes('antialias', true);
    drawingContext.imageSmoothingEnabled = true;
    drawingContext.imageSmoothingQuality = "high";
    //
    background(255);
    imageMode(CENTER);
    rectMode(CENTER);
    //
}
// P5JS draw
function draw() {

}
//
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
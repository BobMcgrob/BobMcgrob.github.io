function setup() {
    var canvas = createCanvas(750, 500);
    canvas.parent('sketch-holder');
}

function draw() {
    background(100,100,100); 
    noStroke();
    fill(255,255,127,200); //white, semi-transparent
    ellipse(mouseX+50,mouseY+50,mouseX+20,20)
}
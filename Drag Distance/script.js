var clicked = false;
var point1 = {x: 0, y: 0};
var point2 = {x: 0, y: 0};
var distance;
var d = .6;
var distfont = 204;
var c = true;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    stroke(255);
    fill(255);
    textFont("sans-serif");
    textSize(16);
    }

function draw() {
    background(0);
    strokeWeight(2);
    fill(255);
    stroke(255);
    
    ellipse(point1.x, point1.y, 10, 10);
    ellipse(point2.x, point2.y, 10, 10);
    
    line(point1.x, point1.y, point2.x, point2.y);
    
    distance = Math.round((dist(point1.x, point1.y, point2.x, point2.y) * 10)) / 10;
    strokeWeight(1);
    fill(distfont);
    stroke(0);
    text("DISTANCE: " + distance + " px", (point2.x < window.innerWidth*0.6 ? point2.x + 12 : window.innerWidth*0.6), (point2.y > 24 ? (point2.y > point1.y && window.innerHeight - point2.y > 12 ? point2.y + 20 : point2.y - 14): 24));
     distfont += d;
     if (distfont >= 255) {
        d = -4; 
     }
     if (distfont <= 175) {
        d = 0.75; 
     }
}

function mouseDragged() {
    if (c) {
    point1.x = mouseX;
    point1.y = mouseY;
    c = false;
    }
   point2.x = mouseX;
   point2.y = mouseY; 
}

function mouseReleased() {
   c = true; 
}
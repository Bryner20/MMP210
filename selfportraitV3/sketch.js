
var x=500;
var y=200;

var lefteyeX= 400;
var righteyeX= 340;
var righteyeY= 340;
var lefteyeY=400

function setup() {
	createCanvas(740, 460);
}
function draw() {
	background(' lightblue');

	stroke(255);
    strokeWeight(10);

    line(mouseX, mouseY, pmouseX, Pmousey);
    
    fill(540, 283, 127);
	ellipse(367, 155, 195, 195);
    
    fill('red');
    x=mouseX;
    y=mouseY;
	circle(x-20, 150, 30);
	fill(0);
	circle(x+40, 150, 30);

	rect(375, 230, 45, 55, 25, 5, 25, 20);
	rect(315, 230, 45, 55, 5, 25, 25, 20);
	rect(310, 45, 120, 50, 5, 55, 30, 20);

	rect(350, 230, 35, 55, 75, 105, 10, 10);
    
	line(365, 220, 385, 210);
	line(270, 150, 465, 150);

}
var x=500;
var y=250;

var eyeSize=100;
var mouthSize=eyeSize;

var faceRed=162;
var faceGreen=108;
var faceBlue=127;

function setup() {
	createCanvas(740, 460);
	x=width/2
	y=height/2
}
function draw() {
	background('lightblue');
	x=mouseX
	y=mouseY

	faceRed=mouseX
	faceGreen=mouseY

    //face
    fill(faceRed, faceGreen, faceBlue);
	ellipse(x-133, y-45, 195, 195);
    //eyes
    fill('red');   
	circle(x-160, y-50, 30);
	fill(0);
	circle(x-110, y-50, 30);

	rect(x-125, y+30, 45, 55, 25, 5, 25, 20);
	rect(x-185, y+30, 45, 55, 5, 25, 25, 20);
	rect(x-190, y-155, 120, 50, 5, 55, 30, 20);

	rect(x-150, y+30, 35, 55, 75, 105, 10, 10);
    
	line(x-135, y+20, x-115, y+10);
	line(x-230, y-50, x-40, y-50);


}
//sound smaple V1

var gundamAlert;
var bgMusic

function preload(){
	completeG = loadImage('CG.jpg');
	gundamUnit = loadImage('GundamU.jpg');
	gundamAlert = loadSound('GundamW.mp3');	
}

function setup(){
	createCanvas(800, 460);
	imageMode('center');
}

function draw() {
	image(gundamUnit, 400, 300, 800, 800);
	textSize(90);
    fill('Black');
    stroke(255);
    text('Click',width/2.5,height/2);
	
	if (gundamAlert.isPlaying()) {
		image(completeG, 400, 300, 800, 800);

	}
}
function mousePressed(){
	gundamAlert.play();
}
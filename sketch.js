function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {

	colorMode(HSB, 100)

	var rad = radians(mouseY);
	var xpos= mouseX;
	var ypos= mouseY;

	if (xpos > 500) {xpos = 500};
	if (ypos > 500) {ypos = 499};
	if (ypos == 0)	{ypos = 1};

	var percent = ypos/500;
	var bra = percent*20;
	var tes = percent*50;
	var ang = (percent)*2*PI;
	console.log(percent);

	background(50,20,90);
	rectMode(CENTER);

	fill(175-(percent*100));

	//Neck
	stroke(50);
	line(xpos, 285, xpos, 345);
	noStroke();
	//Wheel
	ellipse(xpos, 465, 70, 70);

	//Body
		//Torso
	rect(xpos, 405, 100, 140);
		//Lucina
	colorMode(RGB, 100);
	fill(0,100,0, 100-(percent*100));
	ellipse(xpos, 360, 10, 10);
	colorMode(HSB, 100);
	fill(175-(percent*100))
		//Head
	ellipse(xpos, 240+tes, 90, 90);
	fill(0);
	arc(xpos-20, 240+tes, 10, 10, 0, -ang);
	arc(xpos+20, 240+tes, 10, 10, 0, -ang);


	//RotazioneBraccia
	fill(175-(percent*100));
		//BraccioSx
		rect(xpos-63, 385+bra, 25, 100);
		//BraccioDX
		rect(xpos+63, 385+bra, 25, 100);
}

function setup() {
	createCanvas(480, 640);
  	cam = createCapture({ audio: false, video: { width:  {max: 480} , height: {max: 640}, facingMode: "environment" } });
	cam.hide(); 
	cam.width=1;
	img = createGraphics(480,640);
	frame = 0;
}

function draw() {
	background(100);
	if (frame==0) drawF0();
	if (frame==1) drawF1();
	if (frame==2) drawF2();
	if (frame==3) drawF3();
	if (frame==4) drawF4();
}

function drawF0() {
	textAlign(CENTER,CENTER);
	textSize(65).fill(255).noStroke().text("🔎📷",width/2,height/2);
	if (cam.width>1) frame=1;
}

function drawF1() {
	img.image(cam,0,0,480,640); 
	image(img,0,0);
	textSize(65).fill(255).noStroke().text("📸",width/2,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8) { mouseIsPressed=false; frame=2; }
}

function drawF2() {
	image(img,0,0);
	textSize(65).fill(255).noStroke().text("🔁",width*0.25,height*0.90);
	textSize(65).fill(255).noStroke().text("✉️",width*0.75,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8 && mouseX<width*0.5) { mouseIsPressed=false; frame=1; }
	if (mouseIsPressed && mouseY>height*0.8 && mouseX>width*0.5) { mouseIsPressed=false; frame=3; }
}

function drawF3() {
	image(img,0,0);
	var canvas = $('canvas')[0];
	var data = canvas.toDataURL('image/png').replace(/data:image\/png;base64,/, '');
	iname = 'a.jpg';
	$.post('save.php',{data: data, iname });
	textSize(65).fill(255).noStroke().text("💱",width/2,height/2);
	frame=4;
}

function drawF4() {
	img = loadImage("b.jpg");
	image(img,0,0);
	textSize(65).fill(255).noStroke().text("📥",width/2,height*0.90);
}
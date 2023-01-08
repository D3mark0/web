function setup() {
	createCanvas(480, 640);
  	cam = createCapture({ audio: false, video: { width:  {max: 480} , height: {max: 640}, facingMode: "environment" } });
	cam.hide(); 
	cam.width=1;
	img = createGraphics(480,640);
	img_new = createGraphics(480,640);
	img.imageMode(CENTER);
	frame = 0;
}

function draw() {
	background(100);
	if (frame==0) drawF0();
	if (frame==1) drawF1();
	if (frame==2) drawF2();
	if (frame==3) drawF3();
	if (frame==4) drawF4();
	if (frame==5) drawF5();
}

// looking for camera
function drawF0() {
	textAlign(CENTER,CENTER);
	textSize(65).fill(255).noStroke().text("🔎📷",width/2,height/2);
	if (cam.width>1) frame=1;
}

// shooting
function drawF1() {
	img.image(cam,240,320); 
	image(img,0,0);
	textSize(65).fill(255).noStroke().text("📸",width/2,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8) { mouseIsPressed=false; frame=2; }
}

// shot preview
function drawF2() {
	image(img,0,0);
	textSize(65).fill(255).noStroke().text("🔁",width*0.25,height*0.90);
	textSize(65).fill(255).noStroke().text("✉️",width*0.75,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8 && mouseX<width*0.5) { mouseIsPressed=false; frame=1; }
	if (mouseIsPressed && mouseY>height*0.8 && mouseX>width*0.5) { mouseIsPressed=false; frame=3; }
}

// downloading image from the server
function drawF3() {
	image(img,0,0);
	img_new = loadImage('img.jpg');
	frame=4;
}

// uploading new image to the server
function drawF4() {
	image(img,0,0);
	// textSize(65).fill(255).noStroke().text("💱",width/2,height/2);
	var canvas = $('canvas')[0];
	var data = canvas.toDataURL('image/png').replace(/data:image\/png;base64,/, '');
	iname = 'img.jpg';
	$.post('save.php',{data: data, iname });
	frame=5;
}

function drawF5() {
	image(img_new,0,0);
	textSize(65).fill(255).noStroke().text("🔁",width*0.25,height*0.90);
	textSize(65).fill(255).noStroke().text("📥",width*0.75,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8 && mouseX<width*0.5) { 
		mouseIsPressed=false;
		frame=1; 
	}
	if (mouseIsPressed && mouseY>height*0.8 && mouseX>width*0.5) { 
		mouseIsPressed=false; 
		img_new.save('oneshot - '+year()+nf(month(),2)+nf(day(),2)+" - "+nf(hour(),2)+nf(minute(),2)+nf(second())+'.jpg');
	}
}
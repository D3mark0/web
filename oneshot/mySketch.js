function setup() {

	pixelDensity(1);
	createCanvas(480,640);

  cam = createCapture({ audio: false, video: { width: {max: 480}, height: {max: 640}, facingMode: "environment" } });
	cam.hide(); 
	cam.width=1;
	img_cam = createGraphics(480,640);
	img_get = createGraphics(480,640);
	img_cam.imageMode(CENTER);
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
	if (frame==6) drawF6();
}

// looking for camera
function drawF0() {
	textAlign(CENTER,CENTER);
	textSize(65).fill(255).noStroke().text("🔎📷",width/2,height/2);
	if (cam.width>1) frame=1;
}

// shooting
function drawF1() {
	let k = height/cam.height;
	img_cam.image(cam,240,320,cam.width*k,cam.height*k); 
	image(img_cam,0,0);
	textSize(65).fill(255).noStroke().text("📸",width/2,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8) { mouseIsPressed=false; frame=2; }
}

// shot preview
function drawF2() {
	image(img_cam,0,0);
	textSize(65).fill(255).noStroke().text("🔁",width*0.25,height*0.90);
	textSize(65).fill(255).noStroke().text("✉️",width*0.75,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8 && mouseX<width*0.5) { mouseIsPressed=false; frame=1; }
	if (mouseIsPressed && mouseY>height*0.8 && mouseX>width*0.5) { mouseIsPressed=false; frame=3; }
}

// downloading image from the server
function drawF3() {
	image(img_cam,0,0);
	img_get = img_get = loadImage('img.jpg?'+ random(1000));
	frame=4;
}

// uploading new image to the server
function drawF4() {
	image(img_cam,0,0);
	textSize(65).fill(255).noStroke().text("💱",width/2,height/2);
	if (img_get.width>1) {
		var canvas = img_cam.canvas;	//  $('canvas')[0];
		var data = canvas.toDataURL('image/jpeg').replace(/data:image\/jpeg;base64,/, '');
		iname = 'img.jpg';
		$.post('save.php',{data: data, iname });
		frame=5;
	}
}

// saving downloaded image
function drawF5() {
	image(img_get,0,0);
	textSize(65).fill(255).noStroke().text("📥",width*0.5,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8) { 
		mouseIsPressed=false; 
		img_get.save('oneshot - '+year()+nf(month(),2)+nf(day(),2)+" - "+nf(hour(),2)+nf(minute(),2)+nf(second())+'.jpg');
		frame=6;
	}
}

// goodbye screen
function drawF6() {
	background(100);
	let mes = "";
	mes += "👋";
	mes += random(["🤭","😘","🤤", "🤠", "😉", "😌"]);
	mes += random(["🤟","🖖","🤙", "💅", "👍", "🤳"]);
	textSize(65).fill(255).noStroke().text(mes,width*0.5,height*0.50);
	noDraw();
}
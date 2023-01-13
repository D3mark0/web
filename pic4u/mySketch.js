size = [480,640];
wscale = 0.75;

function setup() {

	pixelDensity(1); 
	let w = window.innerWidth;
	let h = window.innerHeight;
	minsize = min(w,h);
	if (w>h) createCanvas(h*wscale*size[0]/size[1],h*wscale);
	else createCanvas(w*wscale,w*wscale*size[1]/size[0]);

  cam = createCapture({ audio: false, video: { height: {max: size[1]}, facingMode: "environment" } });
	cam.hide(); 
	cam.width=1;
	img_cam = createGraphics(size[0],size[1]);
	img_get = createGraphics(size[0],size[1]);
	frame = 0;

	s = 1.0;
	y = height;

	mes = "";
	mes += "👋";
	mes += random(["🤭","😘","🤤", "🤠", "😉", "😌"]);
	mes += random(["🤟","🖖","🤙", "💅", "👍", "🤳"]);

	tsize = height/10;

}

function draw() {
	background(200);
	if (frame==0) drawF0();
	if (frame==1) drawF1();
	if (frame==2) drawF2();
	if (frame==3) drawF3();
	if (frame==4) drawF4();
	if (frame==5) drawF5();
	if (frame==6) drawF6();
	if (frame==7) drawF7();
}

// looking for camera
function drawF0() {
	textAlign(CENTER,CENTER);
	textSize(tsize).fill(255).noStroke().text("🔎📷",width/2,height/2);
	if (cam.width>1) frame=1;
}

// shooting
function drawF1() {
	y -= (y-0)*0.1;
	let fit = cam.width>cam.height*0.75 ? img_cam.height/cam.height : img_cam.width/cam.width;
	img_cam.imageMode(CENTER);
	img_cam.image(cam,size[0]/2,size[1]/2,cam.width*fit,cam.height*fit); 
	image(img_cam,0,y,width,height);
	textSize(tsize).fill(255).noStroke().text("📸",width/2,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8) { mouseIsPressed=false; frame=2; }
}

// shot preview
function drawF2() {
	image(img_cam,0,0,width,height);
	textSize(tsize).fill(255).noStroke().text("🔁",width*0.25,height*0.90);
	textSize(tsize).fill(255).noStroke().text("✉️",width*0.75,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8 && mouseX<width*0.5) { mouseIsPressed=false; frame=1; }
	if (mouseIsPressed && mouseY>height*0.8 && mouseX>width*0.5) { mouseIsPressed=false; frame=3; }
}

// downloading image from the server
function drawF3() {
	image(img_cam,0,0,width,height);
	img_get = loadImage('img.jpg?'+ random(10000));
	frame=4;
}

// uploading new image to the server
function drawF4() {
	image(img_cam,0,0,width,height);
	textSize(tsize).fill(255).noStroke().text("⌛",width/2,height/2);
	if (img_get.width>1) {
		var canvas = img_cam.canvas;
		var data = canvas.toDataURL('image/jpeg').replace(/data:image\/jpeg;base64,/, '');
		iname = 'img.jpg';
		$.post('save.php',{data: data, iname });
		frame=5;
	}
}

// animations
function drawF5() {

	let st = 0.8;
	let yt = height;
	if (yt-y<3) st = 1.0;
	s -= (s-st)*0.1;
	if (s-st<0.001) y -= (y-yt)*0.05;
	
	if ((yt-y<3) && (s>0.999)) frame=6;

	noStroke();
	rectMode(CENTER);

	fill(255);
	rect(width/2,height/2-y, width*0.9, height*0.9, 20);
	triangle(width*0.90, height*0.95-y, 
					 width*0.97, height*0.95-y, 
					 width*0.90, height*0.90-y);

	fill(55,111,246);
	rect(width/2,height/2-y+yt, width*0.9, height*0.9, 20);
	triangle(width*0.10, height*0.95-y+yt, 
					 width*0.03, height*0.95-y+yt, 
					 width*0.10, height*0.90-y+yt);

	imageMode(CENTER);
	image(img_cam,width/2,height/2-y,width*s,height*s);
	image(img_get,width/2,height/2-y+yt,width*s,height*s);

}

// saving downloaded image
function drawF6() {
	imageMode(CORNER);
	image(img_get,0,0,width,height);
	textSize(tsize).fill(255).noStroke().text("📥",width*0.5,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8) { 
		mouseIsPressed=false; 
		img_get.save('oneshot - '+year()+nf(month(),2)+nf(day(),2)+" - "+nf(hour(),2)+nf(minute(),2)+nf(second())+'.jpg');
		frame=7;
		y = 0;
	}
}

// goodbye screen
function drawF7() {
	textSize(tsize).fill(255).noStroke().text(mes,width*0.5,height*0.50);
	image(img_get,0,y,width,height);
	y -= (y-height)*0.05;
}
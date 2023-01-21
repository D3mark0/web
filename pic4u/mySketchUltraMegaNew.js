size = [480,640];
fsize = [50,50];
wscale = 0.75;
dsc = "";



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
	img_fil = createGraphics(fsize[0],fsize[1]);
	frame = 0;

	s = 1.0;
	y = height;
	a = 0.0;
	fy = 0.0;
	check = "";
	counter("get");
	mem = getItem('pic4u_dsc');
	if (mem==null) mem = 0;

	mes = "";
	mes += "👋";
	mes += random(["😄","😁","😆","😅","😊","😇","🙂","😉","😌","😍","🥰","😘","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","🤩","🥳","😏","😎","🤯","😳","😱","🤭","🤫","😐","😲","🤤","😵","🥴","🤠","👽","🤖","🎃"]);
	mes += random(["🖐","✋","🖖","👌","✌️","🤟","🤘","🤙","☝️","✊","💅","🤳"]);

	appreciate = random(["❤️","👍","⭐️","💎"]);

	tsize = height/10;

	skin = {bgr: '#FFFFFF', msg1: '#00B2FF', msg2: '#006AFF'};

	textAlign(CENTER,CENTER);

}

function img_check(img) {
	img_fil.image(img,0,0,fsize[0],fsize[1]);
	let px_total = 4 * img_fil.width * img_fil.height;
	let px_counted = 0;
	loadPixels();
	for (let i = 0; i < px_total; i += 4) {
		px_counted += pixels[i]+pixels[i + 1]+pixels[i + 2];
	}
	px_counted /= 255;
	px_counted /= 3 * img_fil.width * img_fil.height;
	return px_counted.toFixed(3);
}

function counter(method="get") {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.countapi.xyz/"+method+"/pic4u.app/visits");
	xhr.responseType = "json";
	xhr.onload = function() { dsc = this.response.value; }
	xhr.send();
}

function mes2bot() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://cp.puzzlebot.top/api?token=2HFaGyA8vmjzw4P2Z7L4zj5mJgaQ9W1o&method=postSend&chats_ids=-1001775047024&type=message&text="+"📩");
	xhr.responseType = "json";
	xhr.send();
}

function pad(num, size) {
	num = num.toString();
	while (num.length < size) num = "0" + num;
	return num;
}

function draw() {
	background(skin.bgr);
	if (frame==0) drawF0();
	if (frame==1) drawF1();
	if (frame==2) drawF2();
	if (frame==3) drawF3();
	if (frame==4) drawF4();
	if (frame==5) drawF5();
	if (frame==6) drawF6();
	if (frame==7) drawF7();
	if (frame==8) drawF8();
}

// looking for camera
function drawF0() {
	let ready = false;
	if (!dsc && frameCount>180) dsc = mem + 1;
	if (mem<dsc) ready = true;
	textSize(tsize).fill(255).noStroke().text(ready?"🔎📷":"⌚📭",width/2,height/2);
	if (ready && cam.width>1) frame=1;
	print("mem="+mem+" dsc="+dsc);
}

// shooting
function drawF1() {
	y -= (y-0)*0.1;
	let fit = cam.width>cam.height*0.75 ? img_cam.height/cam.height : img_cam.width/cam.width;
	img_cam.imageMode(CENTER);
	img_cam.image(cam,size[0]/2,size[1]/2,cam.width*fit,cam.height*fit); 
	image(img_cam,0,y,width,height);
	textSize(tsize).fill(255).noStroke().text("📸",width/2,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8) { 
		mouseIsPressed=false; 
		check = img_check(img_cam); 
		if (check>0.1 && check<0.9) frame=2; 
	}
}

// shot preview
function drawF2() {
	y = 0;
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
		dsc="";
		counter("hit");
		mes2bot();
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
	
	if ((yt-y<3) && (s>0.999) && dsc) {
		frame=6;
		storeItem('pic4u_dsc', dsc);
	}

	noStroke();
	rectMode(CENTER);

	fill(skin.msg1);
	rect(width/2,height/2-y, width*0.9, height*0.9, 20);
	triangle(width*0.90, height*0.95-y, 
					 width*0.97, height*0.95-y, 
					 width*0.90, height*0.90-y);

	fill(skin.msg2);
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
	textSize(tsize).fill(255).noStroke().text("🗑️",width*0.25,height*0.90);
	textSize(tsize).fill(255).noStroke().text("📥",width*0.75,height*0.90);
	if (mouseIsPressed && mouseY>height*0.8 && mouseX>width*0.5) { 
		mouseIsPressed=false; 
		img_get.save('DSC'+pad(dsc,5)+'.JPG');
		frame=7;
		y = 0;
	}
	if (mouseIsPressed && mouseY>height*0.8 && mouseX<=width*0.5) { 
		mouseIsPressed=false; 
		frame=8;
		y = height/2;
	}
}

// goodbye screen
function drawF7() {
	textSize(tsize).fill(255).noStroke().text(mes,width*0.5,height*0.50);
	image(img_get,0,y,width,height);
	y -= (y-height)*0.05;
	textSize(tsize*2.0).fill(255,255-fy**0.5*255).noStroke().text(appreciate,width*0.5,height*0.75-fy*height*0.3);
	if (fy<1.0) fy+=0.03;
}

// delete screen
function drawF8() {

	push();
		translate(width*0.5,height*0.75);
		rotate(sin(fy*35)*0.25*max(1.0-fy,0));
		textSize(tsize*3.0).fill(255).noStroke().text("🗑️",0,0);
	pop();

	let at = PI/4;
	let st = 0.3;
	let yt = height*0.25;

	if (abs(a-at)<0.03) {
		yt = height*1.5;
		st = 0.2;
	}

	if (abs(a-at)<0.03 && y > height*0.75) {
		textSize(tsize*2.0).fill(255,255-fy**0.5*255).noStroke().text("🔥",width*0.5,height*0.75-fy*height*0.3);
		if (fy<1.0) fy+=0.03;
	}

	a -= (a-at)*0.05;
	y -= (y-yt)*0.05;
	s -= (s-st)*0.1;

	push();
		translate(width/2,y);
		rotate(a);
		imageMode(CENTER);
		if (abs(a-at)>0.03 || y < height*0.7) image(img_get,0,0,width*s,height*s);
	pop();

}


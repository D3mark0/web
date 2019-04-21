var myImages1 = new Array();
myImages1.push("https://i.imgur.com/72prDgI.jpg");
myImages1.push("https://i.imgur.com/6i61oPf.jpg");
myImages1.push("https://i.imgur.com/w6d18uv.jpg");
myImages1.push("https://i.imgur.com/KompI6v.jpg");
myImages1.push("https://i.imgur.com/nNiQORW.jpg");
myImages1.push("https://i.imgur.com/mHlbezK.jpg");
myImages1.push("https://i.imgur.com/fIL6E90.jpg");
myImages1.push("https://i.imgur.com/3nyROAr.jpg");
myImages1.push("https://i.imgur.com/04giosb.jpg");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg() {
  document.getElementById("randimg").src = myImages1[getRandomInt(0, myImages1.length - 1)];
}

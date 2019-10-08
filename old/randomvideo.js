var myVideos1 = new Array();
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPDeWeP-KzrdanuaG5SpD9Mr");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPCDR-oIhcwpFW7aCXf-GL6i");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBuXAf0pjud-v7Eqm0xU0_P");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPA6KIDyZxOqrCg6qtwZzu04");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPCZqVN7QzqQ-LJJC-6DVyFl");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPD2iDq7Fg7Qhq2r2ORLgxvO");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBqwekaOpytiRcguLAjruFx");

var myVideos2 = new Array();
myVideos2.push("&index=0");
myVideos2.push("&index=1");
myVideos2.push("&index=2");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickvideo() {
  document.getElementById("randvideo").src = myVideos1[getRandomInt(0, myVideos1.length - 1)] + myVideos2[getRandomInt(0, myVideos2.length - 1)];
}

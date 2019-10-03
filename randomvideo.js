function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickvideo() {
  document.getElementById("randvideo").src = "http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPCtRSFjMtO3IG_Tp8oRaHZQ&index=" + getRandomInt(0, 56);
}

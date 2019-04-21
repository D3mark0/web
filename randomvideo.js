var myVideos1 = new Array();
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=0");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=1");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=2");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=3");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=4");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=5");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=6");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=7");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=8");
myVideos1.push("http://www.youtube.com/embed/videoseries?list=PLhgHfuWFDIPBexpSrxaxp4l1NbVUaeERw&index=9");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickvideo() {
  document.getElementById("randvideo").src = myVideos1[getRandomInt(0, myVideos1.length - 1)];
}

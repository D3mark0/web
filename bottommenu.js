function reset () {
  hideall();
  document.getElementById("photoexpand").style.display = 'none';
  document.getElementById("textexpand").style.display = 'none';

  posdict = {
    "side" : 2,
    "photo" : 4,
    "video" : 6,
    "music" : 8,
    "text" : 10,
    "calculator" : 12,
    "browser" : 14,
    "paint" : 16,
    "word" : 18
  };

  document.getElementById("title").innerHTML = 'Новая папка';
  document.getElementById("side").style.display = 'block';
  document.getElementById("info").value = "Чтобы создать Новую папку, кликните правой кнопкой мыши по Рабочему столу (там, где ничего нет) или по свободной поверхности окна папки. После этого появится выпадающее окно, которое называется контекстным меню. Такое название меню объясняется тем, что список команд в таком меню полностью зависит от контекста (или от объекта). Другими словами, кликая правой кнопкой мыши по разным объектам, получим разные контексные меню, отличающиеся набором предлагаемых действий.";

  document.getElementById("expand").style.display = 'none';
  document.getElementById("rollup").style.display = 'none';
  document.getElementById("randomize").style.display = 'none';
  document.getElementById("save").style.display = 'none';
  document.getElementById("close").style.display = 'none';

  document.getElementById("side").style.zIndex = "2";
  document.getElementById("sideheader").style.zIndex = "3";
  document.getElementById("side").style.top = "30%";
  document.getElementById("side").style.left = "80%";

  document.getElementById("photo").style.zIndex = "4";
  document.getElementById("photoheader").style.zIndex = "5";
  document.getElementById("photo").style.top = "20%";
  document.getElementById("photo").style.left = "20%";
  pickimgsmall();

  document.getElementById("video").style.zIndex = "6";
  document.getElementById("videoheader").style.zIndex = "7";
  document.getElementById("video").style.top = "40%";
  document.getElementById("video").style.left = "40%";
  pickvideo();

  document.getElementById("music").style.zIndex = "8";
  document.getElementById("musicheader").style.zIndex = "9";
  document.getElementById("music").style.top = "50%";
  document.getElementById("music").style.left = "60%";
  pickmusic();

  document.getElementById("text").style.zIndex = "10";
  document.getElementById("textheader").style.zIndex = "11";
  document.getElementById("text").style.top = "10%";
  document.getElementById("text").style.left = "20%";
  picknotesmall();

  document.getElementById("calculator").style.zIndex = "12";
  document.getElementById("calculatorheader").style.zIndex = "13";
  document.getElementById("calculator").style.top = "5%";
  document.getElementById("calculator").style.left = "50%";
  var els = document.getElementsByName("answer");
  for (var i = 0; i <els.length; i++) {
    els[i].value = "";
  }

  document.getElementById("browser").style.zIndex = "14";
  document.getElementById("browserheader").style.zIndex = "15";
  document.getElementById("browser").style.top = "20%";
  document.getElementById("browser").style.left = "35%";

  document.getElementById("paint").style.zIndex = "16";
  document.getElementById("paintheader").style.zIndex = "17";
  document.getElementById("paint").style.top = "5%";
  document.getElementById("paint").style.left = "5%";
  context.fillRect(0, 0, canvas.width, canvas.height);

  document.getElementById("word").style.zIndex = "18";
  document.getElementById("wordheader").style.zIndex = "19";
  document.getElementById("word").style.top = "30%";
  document.getElementById("word").style.left = "35%";
  document.getElementById("wordarea").value = '';
}

function randomizeButton () {
  var title = document.getElementById("title").innerHTML;
  switch (title) {
    case 'ВЛЦ Видеоплеер':
      pickvideo();
      break;
    case 'Музыкальный проигрыватель':
      pickmusic();
      break;
    default:
      break;
  }
}

function saveButton (element) {
  var title = document.getElementById("title").innerHTML;
  switch (title) {
    case 'Пеинт':
      //document.getElementById("save").setAttribute("download", "paint.jpg");
      var canvas = document.getElementById("canvas");
      var image = canvas.toDataURL("image/jpg");
      element.href = image;
      break;
    case 'Ворд':
      //document.getElementById("save").setAttribute("download", "word.txt");
      var text = document.getElementById("wordarea").value + "\nА на сайте было красивее!";
      text = text.replace(/\n/g, "\r\n");
      var blob = new Blob([text], { type: "text/plain"});
      var anchor = document.createElement("a");
      anchor.download = "word.txt";
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target ="_blank";
      anchor.style.display = "none"; // just to be safe!
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      break;
    default:
      break;
  }
}

function expandButton () {
  var title = document.getElementById("title").innerHTML;
  switch (title) {
    case 'Фотоальбом':
      document.getElementById("photoexpand").style.display = 'block';
      break;
    case 'Заметки':
      document.getElementById("textexpand").style.display = 'block';
      break;
    case 'Интернет Эксплоурер':
      document.getElementById("browser").style.display = 'none';
      break;
    default:
      break;
  }

  document.getElementById("expand").style.display = 'none';
  document.getElementById("close").style.display = 'none';
  document.getElementById("rollup").style.display = 'block';

  hideall();

  if (title == 'Интернет Эксплоурер') {
    closeButton();
  }
}

function rollupButton () {
  var title = document.getElementById("title").innerHTML;
  switch (title) {
    case 'Фотоальбом':
      document.getElementById("photoexpand").style.display = 'none';
      break;
    case 'Заметки':
      document.getElementById("textexpand").style.display = 'none';
      break;
    default:
      break;
  }

  closeButton();
}

function closeButton () {
  var title = document.getElementById("title").innerHTML;
  switch (title) {
    case 'Фотоальбом':
      document.getElementById("photo").style.display = 'none';
      break;
    case 'ВЛЦ Видеоплеер':
      document.getElementById("video").style.display = 'none';
      break;
    case 'Музыкальный проигрыватель':
      document.getElementById("music").style.display = 'none';
      break;
    case 'Заметки':
      document.getElementById("text").style.display = 'none';
      break;
    case 'Калькулятор':
      document.getElementById("calculator").style.display = 'none';
      break;
    case 'Интернет Эксплоурер':
      document.getElementById("browser").style.display = 'none';
      break;
    case 'Пеинт':
      document.getElementById("paint").style.display = 'none';
      break;
    case 'Ворд':
      document.getElementById("word").style.display = 'none';
      break;
    default:
      break;
  }

  document.getElementById("title").innerHTML = 'Новая папка';
  document.getElementById("side").style.display = 'block';
  document.getElementById("info").value = "Чтобы создать Новую папку, кликните правой кнопкой мыши по Рабочему столу (там, где ничего нет) или по свободной поверхности окна папки. После этого появится выпадающее окно, которое называется контекстным меню. Такое название меню объясняется тем, что список команд в таком меню полностью зависит от контекста (или от объекта). Другими словами, кликая правой кнопкой мыши по разным объектам, получим разные контексные меню, отличающиеся набором предлагаемых действий.";

  document.getElementById("expand").style.display = 'none';
  document.getElementById("rollup").style.display = 'none';
  document.getElementById("randomize").style.display = 'none';
  document.getElementById("save").style.display = 'none';
  document.getElementById("close").style.display = 'none';
}

function hideall () {
  document.getElementById("side").style.display = 'none';
  document.getElementById("photo").style.display = 'none';
  document.getElementById("video").style.display = 'none';
  document.getElementById("music").style.display = 'none';
  document.getElementById("text").style.display = 'none';

  document.getElementById("calculator").style.display = 'none';
  document.getElementById("browser").style.display = 'none';
  document.getElementById("paint").style.display = 'none';
  document.getElementById("word").style.display = 'none';
}

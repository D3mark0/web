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

function expandButton () {
  var title = document.getElementById("title").innerHTML;
  switch (title) {
    case 'Фотоальбом':
      document.getElementById("photoexpand").style.display = 'block';
      break;
    case 'Заметки':
      document.getElementById("textexpand").style.display = 'block';
      break;
    case 'Веб-браузер':
      document.getElementById("browser").style.display = 'none';
      break;
    default:
      break;
  }

  document.getElementById("expand").style.display = 'none';
  document.getElementById("close").style.display = 'none';
  document.getElementById("rollup").style.display = 'block';

  hideall();

  if (title == 'Веб-браузер') {
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
    case 'Веб-браузер':
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

  document.getElementById("title").innerHTML = 'Меню';
  document.getElementById("side").style.display = 'block';

  document.getElementById("expand").style.display = 'none';
  document.getElementById("rollup").style.display = 'none';
  document.getElementById("randomize").style.display = 'none';
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

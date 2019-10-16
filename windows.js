var posdict = {
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

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    topElement();
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function topElement() {
    document.getElementById("title").innerHTML = document.getElementById(elmnt.id + "header").innerHTML;

    var title = document.getElementById("title").innerHTML;
    document.getElementById("expand").style.display = 'none';
    document.getElementById("rollup").style.display = 'none';
    document.getElementById("randomize").style.display = 'none';
    document.getElementById("save").style.display = 'none';
    document.getElementById("close").style.display = 'none';

    document.getElementById("side").style.border = "none";
    document.getElementById("photo").style.border = "none";
    document.getElementById("video").style.border = "none";
    document.getElementById("music").style.border = "none";
    document.getElementById("text").style.border = "none";

    document.getElementById("calculator").style.border = "none";
    document.getElementById("browser").style.border = "none";
    document.getElementById("paint").style.border = "none";
    document.getElementById("word").style.border = "none";

    document.getElementById("info").value = "";

    if (posdict[elmnt.id] != 18) {
      var checker = posdict[elmnt.id];
      elmnt.style.zIndex = "18";
      document.getElementById(elmnt.id + "header").style.zIndex = "19";
      posdict[elmnt.id] = 20;

      for (var key in posdict) {
        if (posdict[key] > checker) {
          posdict[key] = posdict[key] - 2;
          document.getElementById(key).style.zIndex = posdict[key];
          document.getElementById(key + "header").style.zIndex = posdict[key] + 1;
        }
      }
    }

    switch (title) {
      case 'Новая папка':
        document.getElementById("side").style.border = "thick solid #ff6998";
        document.getElementById("info").value = "Чтобы создать Новую папку, кликните правой кнопкой мыши по Рабочему столу (там, где ничего нет) или по свободной поверхности окна папки. После этого появится выпадающее окно, которое называется контекстным меню. Такое название меню объясняется тем, что список команд в таком меню полностью зависит от контекста (или от объекта). Другими словами, кликая правой кнопкой мыши по разным объектам, получим разные контексные меню, отличающиеся набором предлагаемых действий.";
        break;
      case 'Фотоальбом':
        document.getElementById("photo").style.border = "thick solid #ff6998";
        document.getElementById("expand").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "Программа для просмотра изображений в D3mark0 OS. Включает в себя файловый менеджер и базу данных. Считается одной из наиболее функциональных бесплатных программ в своём классе. Является бесплатной для домашнего использования начиная с версии 3.5.";
        break;
      case 'ВЛЦ Видеоплеер':
        document.getElementById("video").style.border = "thick solid #ff6998";
        document.getElementById("randomize").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "Видеоплеер ВЛЦ — это простой, но мощный кросс-платформенный плеер с интуитивным интерфейсом. К главному его преимуществу относится способность воспроизводить широкий спектр аудио- и видеоформатов, в том числе MKV, MOV, FLAC и MPC. Также плеер поддерживает распространенные кодеки: MPEG-1, H.265, WMV3 и VC-1.";
        break;
      case 'Музыкальный проигрыватель':
        document.getElementById("music").style.border = "thick solid #ff6998";
        document.getElementById("randomize").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "Отличный всеядный бесплатный аудио-проигрыватель. По праву считается одним их лидеров ниши и пользуется колоссальной популярностью.";
        break;
      case 'Заметки':
        document.getElementById("text").style.border = "thick solid #ff6998";
        document.getElementById("expand").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "Составьте список покупок или запишите чей-то номер телефона прямо на рабочем столе D3mark0 OS. Сделать это очень легко, просто следуйте нашей инструкции.";
        break;
      case 'Калькулятор':
        document.getElementById("calculator").style.border = "thick solid #ff6998";
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "В программе «Калькулятор» можно выполнять простые или сложные вычисления и пользоваться калькулятором программиста. Если у Вашего D3mark0 PC есть панель Touch Bar, можно быстро выполнять простые расчеты, даже не двигая курсор с места.";
        break;
      case 'Интернет Эксплоурер':
        document.getElementById("browser").style.border = "thick solid #ff6998";
        document.getElementById("expand").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "Это самый популярный браузер для D3mark0 OS во всём мире. Стабильная версия была выпущена в 2017 году. Она является самой мощной и функциональной. На момент выхода этой версии с ней никто не мог сравниться в скорости. Разработчики D3mark0 хорошенько постарались.";
        break;
      case 'Пеинт':
        document.getElementById("paint").style.border = "thick solid #ff6998";
        document.getElementById("save").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "Многофункциональный, но в то же время довольно простой в использовании растровый графический редактор компании D3mark0, входящий в состав всех операционных систем D3mark0 OS, начиная с первых версий.";
        break;
      case 'Ворд':
        document.getElementById("word").style.border = "thick solid #ff6998";
        document.getElementById("save").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        document.getElementById("info").value = "Это программа для печатания и оформления текста. Эта программа создана для создания текстов различной сложности. Вы можете создать статью, документ, реферат, курсовую, диплом и даже книгу. К тому же, Ворд позволяет красиво оформить текст, выбрать стиль и цвет шрифта по своему вкусу, добавить в него картинку или фото и даже составить таблицу. И, конечно, напечатанное можно легко распечатать на принтере.";
        break;
      default:
        break;
    }
  }
}

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
    document.getElementById("close").style.display = 'none';

    document.getElementById("side").style.border = "none";
    document.getElementById("photo").style.border = "none";
    document.getElementById("video").style.border = "none";
    document.getElementById("music").style.border = "none";
    document.getElementById("text").style.border = "none";

    document.getElementById("calculator").style.border = "none";
    document.getElementById("browser").style.border = "none";
    document.getElementById("paint").style.border = "none";

    switch (title) {
      case 'Фото':
        document.getElementById("photo").style.border = "thick solid #ff6998";
        document.getElementById("expand").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        break;
      case 'Видео':
        document.getElementById("video").style.border = "thick solid #ff6998";
        document.getElementById("randomize").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        break;
      case 'Музыка':
        document.getElementById("music").style.border = "thick solid #ff6998";
        document.getElementById("randomize").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        break;
      case 'Текст':
        document.getElementById("text").style.border = "thick solid #ff6998";
        document.getElementById("expand").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        break;
      case 'Калькулятор':
        document.getElementById("calculator").style.border = "thick solid #ff6998";
        document.getElementById("close").style.display = 'block';
        break;
      case 'Веб-браузер':
        document.getElementById("browser").style.border = "thick solid #ff6998";
        document.getElementById("expand").style.display = 'block';
        document.getElementById("close").style.display = 'block';
        break;
      case 'Пеинт':
        document.getElementById("paint").style.border = "thick solid #ff6998";
        document.getElementById("close").style.display = 'block';
        break;
      default:
        document.getElementById("side").style.border = "thick solid #ff6998";
        break;
    }
  }
}

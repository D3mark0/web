var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Выполняем по завершении загрузки страницы
window.addEventListener("load", function onWindowLoad() {
    // Инициализируем переменные

    // переменные для рисования
    context.lineCap = "round";
    context.lineWidth = 8;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // вешаем обработчики на кнопки
    // очистка изображения
    document.getElementById("clear").onclick = function clear() {
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    // На любое движение мыши по canvas будет выполнятся эта функция
    canvas.onmousemove = function drawIfPressed (e) {
      // в "e"  попадает экземпляр MouseEvent
      var x = e.offsetX;
      var y = e.offsetY;
      var dx = e.movementX;
      var dy = e.movementY;

      // Проверяем зажата ли какая-нибудь кнопка мыши
      // Если да, то рисуем
      if (e.buttons > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - dx, y - dy);
        context.stroke();
        context.closePath();
      }
    };

    document.getElementById("whitecolor").addEventListener('click', function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });
    document.getElementById("blackcolor").addEventListener('click', function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });
    document.getElementById("bluecolor").addEventListener('click', function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });
    document.getElementById("pinkcolor").addEventListener('click', function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });
});

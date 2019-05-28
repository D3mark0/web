function mrkekButton () {
  document.getElementById("mrkek").style.display = 'block';

  document.getElementById("title").innerHTML = "Мистер КЕК";

  document.getElementById("expand").style.display = 'none';
  document.getElementById("rollup").style.display = 'none';
  document.getElementById("randomize").style.display = 'none';
  document.getElementById("close").style.display = 'block';

  hideall();
}

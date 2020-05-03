function hideAll() {
  document.getElementById('title').style.display = "none";
  document.getElementById('modal1').style.display = "none";
  document.getElementById('modal2').style.display = "none";
  document.getElementById('modal3').style.display = "none";
  document.getElementById('modal4').style.display = "none";
}

function openModal(modal) {
  hideAll();
  document.getElementById(modal).style.display = "block";
}

function closeModal(modal) {
  document.getElementById(modal).style.display = "none";
  document.getElementById('title').style.display = "block";
}

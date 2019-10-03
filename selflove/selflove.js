function openModal(modal) {
  document.getElementById(modal).style.display = "block";
  document.body.style.overflowY = "hidden";
}

function closeModal(modal) {
  document.getElementById(modal).style.display = "none";
  document.body.style.overflowY = "scroll";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var slideIndex1 = getRandomInt(0, 27);
var slideIndex2 = getRandomInt(0, 19);
var slideIndex3 = getRandomInt(0, 10);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex1-1].style.display = "block";
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "block";
}

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex3-1].style.display = "block";
}

function openText1() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  document.getElementById("prev1").style.display = "none";
  document.getElementById("next1").style.display = "none";
  document.getElementById("text-header1").style.display = "none";
  document.getElementById("text-container1").style.display = "block";
  document.getElementById("close1").style.display = "block";
}

function closeText1() {
  document.getElementById("text-container1").style.display = "none";
  document.getElementById("close1").style.display = "none";
  document.getElementById("prev1").style.display = "block";
  document.getElementById("next1").style.display = "block";
  document.getElementById("text-header1").style.display = "block";
  showSlides1(slideIndex1);
}

function openText2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  document.getElementById("prev2").style.display = "none";
  document.getElementById("next2").style.display = "none";
  document.getElementById("text-header2").style.display = "none";
  document.getElementById("text-container2").style.display = "block";
  document.getElementById("close2").style.display = "block";
}

function closeText2() {
  document.getElementById("text-container2").style.display = "none";
  document.getElementById("close2").style.display = "none";
  document.getElementById("prev2").style.display = "block";
  document.getElementById("next2").style.display = "block";
  document.getElementById("text-header2").style.display = "block";
  showSlides2(slideIndex2);
}

function openText3() {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  document.getElementById("prev3").style.display = "none";
  document.getElementById("next3").style.display = "none";
  document.getElementById("text-header3").style.display = "none";
  document.getElementById("text-container3").style.display = "block";
  document.getElementById("close3").style.display = "block";
}

function closeText3() {
  document.getElementById("text-container3").style.display = "none";
  document.getElementById("close3").style.display = "none";
  document.getElementById("prev3").style.display = "block";
  document.getElementById("next3").style.display = "block";
  document.getElementById("text-header3").style.display = "block";
  showSlides3(slideIndex3);
}

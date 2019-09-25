var CalculatorAnswers = new Array();
CalculatorAnswers.push("42");
CalculatorAnswers.push("10");
CalculatorAnswers.push("1 2 3 4");
CalculatorAnswers.push("56");
CalculatorAnswers.push("0");
CalculatorAnswers.push("78");
CalculatorAnswers.push("number");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getanswer() {
  document.getElementById("answer").value = CalculatorAnswers[getRandomInt(0, CalculatorAnswers.length - 1)];
}

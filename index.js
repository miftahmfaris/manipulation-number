function addition() {
  var number1 = document.getElementById("number_1").value;
  var number2 = document.getElementById("number_2").value;

  document.getElementById("number_1").value = "";
  document.getElementById("number_2").value = "";

  return document.getElementById("calculationResult").value = Number(number1) + Number(number2);
}

function substract() {
  var number1 = document.getElementById("number_1").value;
  var number2 = document.getElementById("number_2").value;

  document.getElementById("number_1").value = "";
  document.getElementById("number_2").value = "";

  return document.getElementById("calculationResult").value = Number(number1) - Number(number2);
}

function multiple() {
  var number1 = document.getElementById("number_1").value;
  var number2 = document.getElementById("number_2").value;

  document.getElementById("number_1").value = "";
  document.getElementById("number_2").value = "";

  return document.getElementById("calculationResult").value = Number(number1) * Number(number2);
}

function divide() {
  var number1 = document.getElementById("number_1").value;
  var number2 = document.getElementById("number_2").value;

  document.getElementById("number_1").value = "";
  document.getElementById("number_2").value = "";

  return document.getElementById("calculationResult").value = Number(number1) / Number(number2);
}

document.getElementById("addButton").addEventListener("click", function() {
  document.getElementById("textResult").innerHTML = "Addition Result"
})

document.getElementById("subButton").addEventListener("click", function() {
  document.getElementById("textResult").innerHTML = "Substract Result"
})

document.getElementById("multipleButton").addEventListener("click", function() {
  document.getElementById("textResult").innerHTML = "Multiple Result"
})

document.getElementById("divideButton").addEventListener("click", function() {
  document.getElementById("textResult").innerHTML = "Divide Result"
})
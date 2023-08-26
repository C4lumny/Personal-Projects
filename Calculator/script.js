function displayOnText(number) {
  document.getElementById("display").value += number;
}

function cleanInput(type) {
  switch (type) {
    case "C":
      document.getElementById("display").value = "";
      break;
    case "Arrow":
      let display = document.getElementById("display").value;
      array = display.split("");
      array.pop();
      document.getElementById("display").value = array.join("");
      break;
  }
}

function calculate() {
  let display = document.getElementById("display").value;
  let array = display.split(" ");
  let number1 = array[0];
  let operand = array[1];
  let number2 = array[2];

  switch (operand) {
    case "+":
      document.getElementById("display").value =
        parseInt(number1) + parseInt(number2);
      break;
    case "-":
      document.getElementById("display").value =
        parseInt(number1) - parseInt(number2);
      break;
    case "×":
      document.getElementById("display").value =
        parseInt(number1) * parseInt(number2);
      break;
    case "/":
      document.getElementById("display").value =
        parseInt(number1) / parseInt(number2);
        break;
  }
}

/*Lumny*/
let display = document.getElementById("display");

function clearDisplay() {
  display.textContent = "0";
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

function appendNumber(number) {
  if (display.textContent === "0") {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.textContent.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    display.textContent = display.textContent.slice(0, -1) + operator;
  } else {
    display.textContent += operator;
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace("÷", "/").replace("×", "*"));
  } catch (error) {
    display.textContent = "Error";
  }
}

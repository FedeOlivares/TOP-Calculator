const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const operators = ["+", "-", "x", "/", ".", "="];

const grid = document.querySelector(".calculator-grid");

digits.forEach(digit => {
  const btn = document.createElement("button");
  btn.textContent = digit;
  btn.classList.add("calc-btn");
  if (digit === "0") {
    btn.classList.add("zero");
  }
  grid.appendChild(btn);
});

const operator = document.querySelector(".operator-grid");

operators.forEach(operator => {
    const btn = document.createElement("button");
    btn.textContent = operator;
    btn.classList.add("opr-btn");
    grid.appendChild(btn)
});
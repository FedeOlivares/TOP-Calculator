const digits = ["+", "-", "x", "/", "7", "8", "9",".", "4", "5", "6","=", "1", "2", "3", "C", "0"];
const operators = [   ];

const btnGrid = document.querySelector(".calculatorGrid");


digits.forEach(digit => {
  const btn = document.createElement("button");
  btn.textContent = digit;
  btn.classList.add("btn");
  if (digit === "0") {
    btn.classList.add("zero");
  }
  btnGrid.appendChild(btn);
});


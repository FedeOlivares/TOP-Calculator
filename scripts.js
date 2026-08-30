const buttonDefs = new Map([
  ["+", { type: "operator" }],
  ["-", { type: "operator" }],
  ["x", { type: "operator" }],
  ["/", { type: "operator" }],
  ["7", { type: "numeric" }],
  ["8", { type: "numeric" }],
  ["9", { type: "numeric" }],
  [".", { type: "numeric" }],
  ["4", { type: "numeric" }],
  ["5", { type: "numeric" }],
  ["6", { type: "numeric" }],
  ["C", { type: "action" }],
  ["1", { type: "numeric" }],
  ["2", { type: "numeric" }],
  ["3", { type: "numeric" }],
  ["=", { type: "action" }],
  ["0", { type: "numeric" }]
]);

let currentInputA = "";
let currentInputB = "";
let currentInputOpr = "";


const btnGrid = document.querySelector(".calculatorGrid");
const input = document.getElementById("input");
const output = document.getElementById("output");


buttonDefs.forEach((def, symbol) => {
  const btn = document.createElement("button");
  btn.textContent = symbol;
  btn.classList.add("btn");
  btn.dataset.type = def.type;
  if (symbol === "0") {
    btn.classList.add("zero");
  }
  btnGrid.appendChild(btn);
});

const buttons = document.querySelectorAll(".btn")

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    const type = btn.dataset.type;

    if (type === "numeric") {
      if (currentInputOpr === "") {
        currentInputA += val;
        input.textContent = currentInputA;
      } else {
        currentInputB += val;
        input.textContent = currentInputB;
      }
    } else if (type === "operator") {
        currentInputOpr = val;
        input.textContent = currentInputOpr;
      }
    else if (val === "C") {
      currentInputA = "";
      currentInputB = "";
      currentInputOpr = "";
    }  
    input.textContent = currentInputA + currentInputOpr + currentInputB;   
  });
});

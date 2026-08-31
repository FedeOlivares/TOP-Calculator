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
    let result;

    if (type === "numeric") {
      if (currentInputOpr === "") {
        currentInputA += val;
        input.textContent = currentInputA;
      } else {
        currentInputB += val;
        input.textContent = currentInputB;
      }
    } else if (type === "operator") {
      if (currentInputA != "") {
        currentInputOpr = val;
        input.textContent = currentInputOpr;
        } 
        else if (val === "-") {
        currentInputA += val;
        input.textContent = currentInputA;
      }
    }
    else if (val === "C") {
      currentInputA = "";
      currentInputB = "";
      currentInputOpr = "";
      result = "";
    }  
    input.textContent = currentInputA + currentInputOpr + currentInputB; 
    output.textContent = result;
    
    if (val === "=") {
      if (currentInputA !== "" && currentInputB !== "" && currentInputOpr !== "") {
        result = calculate(currentInputA, currentInputB, currentInputOpr);
        output.textContent = result;
        currentInputA = result.toString();
        currentInputB = "";
        currentInputOpr = "";
      }
      }
  });
});

function calculate(a, b, opr) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  if (opr === "+") {
    result = numA + numB;
  } else if (opr === "-") {
    result = numA - numB;
  } else if (opr === "x") {
    result = numA * numB;
  } else if (opr === "/") {
    result = numA / numB;
  }
  return result;
};
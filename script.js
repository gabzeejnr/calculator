let display = document.getElementById('display-el');
const numbers = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');

//Operators' Call
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equal');

let firstNumber, secondNumber, operator, result;

//This handles the clear button
clearButton.addEventListener('click', () => {
  display.value = "";
});

//This part of code controls the number display into the input...
numbers.forEach( (number) => {
  number.addEventListener('click', () => {
    display.value += number.textContent;
  });
});


//Operations Base... Again

function setOperator(op) {
  firstNumber = display.value;
  operator = op;
  display.value = "";
};

addButton.addEventListener('click', () => {
  setOperator('+');
});
subtractButton.addEventListener('click', () => {
  setOperator('-');
});
divideButton.addEventListener('click', () => {
  setOperator('/')
});
multiplyButton.addEventListener('click', () => {
  setOperator('*')
});

equalButton.addEventListener('click', () => {
  secondNumber = display.value;
  if (operator === '+') {
    result = Number(firstNumber) + Number(secondNumber);
    display.value = result;
  };
  if (operator === '-') {
    result = Number(firstNumber) - Number(secondNumber);
    display.value = result;
  };
  if (operator === '/') {
    result = Number(firstNumber) / Number(secondNumber);
    display.value = result;
  };
  if (operator === '*') {
    result = Number(firstNumber) * Number(secondNumber);
    display.value = result;
  };
  firstNumber = result;
});
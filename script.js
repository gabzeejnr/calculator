let display = document.getElementById('display-el');
const numbers = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear');
      
//Operators' Call
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equal');
      
      
const operatorSign = document.querySelectorAll('.operator');
let firstNumber, secondNumber, operator, output;
      
//This handles the clear button
clearButton.addEventListener('click', () => {
        display.value = ""
})
        
//This part of code controls the number display into the input...
numbers.forEach( (number) => {
  number.addEventListener('click', () => {
    display.value += number.textContent;
  });
});
      
/* //Operation Base😭😭😭
operatorSign.forEach((operator) => {
  operator.addEventListener('click', () => {
    firstNumber = display.value;
    display.value = "";
    secondNumber = display.value;
          
    if (operator === '=') {
            
      if(operator === '+') {
        output = Number(firstNumber) + Number(secondNumber);
        console.log(output)
      }
      if (operator === '-') {
        output = Number(firstNumber) - Number(secondNumber);
      }
      if (operator === '/') {
        output = Number(firstNumber) / Number(secondNumber);
      }
      if (operator === '*') {
        output = Number(firstNumber) * Number(secondNumber);
      }
      console.log(output);
    }
  });
}) */

//Operations Base... Again

addButton.addEventListener('click', () => {
  firstNumber = display.value;
  display.value = "";
  
  equalButton.addEventListener('click', () => {
    secondNumber = display.value;
    result = Number(firstNumber) + Number(secondNumber);
    display.value = result;
  });
})
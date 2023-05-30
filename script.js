function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    let expression = document.getElementById('display').value;
    let result = evaluateExpression(expression);
    document.getElementById('display').value = result;
  }
  
  function evaluateExpression(expression) {
    let numbers = expression.split(/[-+*/]/).map(Number);
    let operators = expression.split(/[0-9.]+/).filter(Boolean);
  
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      let operator = operators[i];
      let number = numbers[i + 1];
  
      if (operator === '+') {
        result += number;
      } else if (operator === '-') {
        result -= number;
      } else if (operator === '*') {
        result *= number;
      } else if (operator === '/') {
        result /= number;
      }
    }
  
    return result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
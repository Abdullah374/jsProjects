const display = document.getElementById("display")

let expression = null;


function output(){
    display.innerHTML = expression
}

function one(){
    display.value = display.value + "1"
    expression = display.value
   
    
}


function two(){
    display.value = display.value + "2"
    expression = display.value
   
}


function three(){
    display.value = display.value + "3"
    expression = display.value
   
}


function four(){
    display.value = display.value + "4"
    expression = display.value
   
}


function five(){
    display.value = display.value + "5"
    expression = display.value
   
}


function six(){
    display.value = display.value + "6"
    expression = display.value
   
}


function seven(){
    display.value = display.value + "7"
    expression = display.value
   
}


function eight(){
    display.value = display.value + "8"
    expression = display.value
   
}


function nine(){
    display.value = display.value + "9"
    expression = display.value
   
}


function zero(){
    display.value = display.value + "0"
    expression = display.value
   
}

function dZero(){
    display.value = display.value + "00"
    expression = display.value
}

function point(){
    display.value = display.value + "."
    expression = display.value
}

function plus(){
    display.value = display.value + "+"
    expression = display.value
}

function minus(){
    display.value = display.value + "-"
    expression = display.value
}

function multiply(){
    display.value = display.value + "x"
    expression = display.value
}

function divide(){
    display.value = display.value + "/"
    expression = display.value
}

function power(){
    display.value = display.value + "^"
    expression = display.value
}

function evaluateExpression(expr) {
    const operate = (a, operator, b) => {
      switch (operator) {
        case '^': return Math.pow(a, b);
        case 'x': return a * b;
        case '/': return a / b;
        case '+': return a + b;
        case '-': return a - b;
        default: throw new Error(`Unknown operator: ${operator}`);
      }
    };
  
    const tokenize = (expr) => {
      return expr.match(/(\d+(\.\d+)?)|[\+\-\x\/\^\(\)]/g).map(token => {
        return isNaN(token) ? token : parseFloat(token);
      });
    };
  
    const evaluate = (tokens, operators) => {
      for (let i = 0; i < tokens.length; i++) {
        if (operators.includes(tokens[i])) {
          const result = operate(Number(tokens[i - 1]), tokens[i], Number(tokens[i + 1]));
          tokens.splice(i - 1, 3, result);
          i--; // Recheck the current index
        }
      }
    };
  
    const parseAndEvaluate = (tokens) => {
      // Handle parentheses recursively
      while (tokens.includes('(')) {
        const openIndex = tokens.lastIndexOf('(');
        const closeIndex = tokens.indexOf(')', openIndex);
        if (closeIndex === -1) throw new Error('Mismatched parentheses');
  
        // Evaluate the expression inside parentheses
        const subExpression = tokens.slice(openIndex + 1, closeIndex);
        const result = parseAndEvaluate(subExpression);
  
        // Replace "(subExpression)" with its result
        tokens.splice(openIndex, closeIndex - openIndex + 1, result);
      }
  
      // Handle operators in PEMDAS order
      evaluate(tokens, ['^']); // Exponents
      evaluate(tokens, ['x', '/']); // Multiplication and Division
      evaluate(tokens, ['+', '-']); // Addition and Subtraction
  
      if (tokens.length !== 1) throw new Error('Invalid expression');
      return tokens[0];
    };
  
    // Check for leading or trailing operators
    const trimmedExpr = expr.trim();
    if (/^[+\-x/^]/.test(trimmedExpr)) {
      throw new Error('Expression starts with an operator.');
    }
    if (/[+\-x/^]$/.test(trimmedExpr)) {
      throw new Error('Expression ends with an operator.');
    }
  
    // Tokenize and evaluate
    const tokens = tokenize(expr);
    return parseAndEvaluate(tokens);
  }
  
  // Example usage with the equal function
  function equal() {
    try {
      const result = evaluateExpression(display.value);
      display.value = result;
      expression = display.value;
    } catch (error) {
      alert(error.message);
    }
  }



function del(){
    display.value = display.value.slice(0, -1)
    expression = display.value
}

function allClear(){
    display.value = ""
    expressiosn = display.value
}


// function declaration
function addDeclaration(num1, num2) {
  return num1 + num2;
}

// function expression
const addExpresstion = function(num1, num2) {
  return num1 + num2;
}

// ES6 fat-arrow function expression
const addFatArrorExpression = (num1, num2) => {
  return num1 + num2;
}

// Anonymous closure function
(function(message) {
  console.log(message)
})("This is an anonyous closure function");

const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2) => {
  return num1 + num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

console.log(calculator(1000, 4000, multiply));

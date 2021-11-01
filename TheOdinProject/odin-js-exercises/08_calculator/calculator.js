const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(args) {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(args) {
  return args.length
  ? args.reduce((acc, curr) => acc * curr)
  : 0;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(arg) {
  if (arg === 0) {
    return 1;
  }
  let product = 1;
  for (let i = 1; i <= arg; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

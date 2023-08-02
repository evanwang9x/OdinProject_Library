const add = function(num, num2) {
	return num+num2
};

const subtract = function(num, num2) {
	return num - num2
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i< array.length; i++) {
    sum += array[i];
  }
  return sum
}; 

const multiply = function(...args) {
  let sum = 1;
  for(let i=0; i < args.length; i++) {
    sum *= args[i];
  }
  return sum;
};
const power = function(num, num2) {
  let sum = 1
  for(let i =0; i<num2; i++) {
    sum *= num
  }
  return sum;
};

const factorial = function(num) {
  if (num ===0 ) {
      return 1
  }
  let sum = num
    for (let i =num-1; i > 0; i--) {
      sum*= i
    }
    return sum;
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

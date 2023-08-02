const multiply = function(...args) {
    let sum = 1;
    for(let i=0; i < args.length; i++) {
      sum *= args[i]
    }
    return sum
  };
  console.log(multiply(2,4,6))
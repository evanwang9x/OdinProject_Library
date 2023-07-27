const removeFromArray = function(inputArray, ...args) {
    for (let i =0; i < args.length; i++) {
        let arr = [];
          if(args.length == 0) {
              return inputArray;
          }
       else {
       let arr = [];
        while (i < inputArray.length) {
            for(let j =0; j < args.length; j++) {
              	if(inputArray[i] === args[j]) {
                	let filteredNumber = i;
                    console.log(filteredNumber);
                    inputArray.splice(filteredNumber, 1);
                    i--;
                    break;
                }
              }
            i++;
        }
       for(let k =0; k < inputArray.length; k++) {
            arr[k] = inputArray[k]}
        return arr;
       }
       
       }
}
// Do not edit below this line
module.exports = removeFromArray;


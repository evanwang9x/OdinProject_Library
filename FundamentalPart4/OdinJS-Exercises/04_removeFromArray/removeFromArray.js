const removeFromArray = function(inputArray, ...args) {
       let arr = [];
       let i =0
        while (i < inputArray.length) {
            for(let j =0; j < args.length; j++) {
              	if(inputArray[i] === args[j]) {
                	let filteredNumber = i;
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
// Do not edit below this line
module.exports = removeFromArray;


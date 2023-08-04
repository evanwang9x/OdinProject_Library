const reverseString = function(string) {
    let stringLength = string.length;
    let reversedString = "";
    for(let i =0; i < stringLength; i++) {
        reversedString += string[stringLength - i -1];
    }
    return reversedString;
}
// Do not edit below this line
module.exports = reverseString;

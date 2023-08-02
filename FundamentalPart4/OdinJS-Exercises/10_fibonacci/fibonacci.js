const fibonacci = function(initialNum) {
    let num = Number(initialNum)
    let num0 = 0
    let num1 = 1
    let finalNum = 0;
    if(num <0 ) {
        return "OOPS"
    }
    if (initialNum == 0) {
        return num0
    }
    else if (initialNum == 1) {
        return num1
    }
    else{
    for(let i =2; i <= initialNum; i++) {        
        if(i % 2 == 0 || i ==0) {
            num0 += num1
            if(i == initialNum) {
                finalNum = num0
                return finalNum
            }
        }
        else {
            num1 += num0
            if(i == initialNum) {
                finalNum = num1
                return finalNum
            }
        }
    }
}
};

// Do not edit below this line
module.exports = fibonacci;

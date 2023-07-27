const sumAll = function(param1, param2) {
    let sum =0;
    if(typeof(param1) != "number" || typeof(param2) != "number") {
        return "ERROR"
    }
    else if(param1<0 || param2<0) {
        return "ERROR"
    }
    else if(param1 > param2) {
        for(let i = param2; i <= param1; i++) {
            sum += i
        }
        return sum
    }
    else if(param2 > param1) {
        for(let i = param1; i <= param2; i++) {
            sum+=i
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;

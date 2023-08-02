const getTheTitles = function(object) {
    let resultArray = [];
    for(let i =0; i < object.length; i++) {
        resultArray[i] = object[i].title
    }
    return resultArray
};

// Do not edit below this line
module.exports = getTheTitles;

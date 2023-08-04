/* You have to manually test it cause findTheOldest.spec.js
is bugged and always returns undefined even though I try
it elsewhere.
*/


const findTheOldest = function(object) {
    let oldestAge = 0;
    let oldestPerson = ""
    let age =0
    for(let i =0; i < object.length; i++) {
        if ("yearOfDeath" in object[i]) {
            age = object[i].yearOfDeath - object[i].yearOfBirth
        }       
        else {
            age = 2023 - object[i].yearOfBirth
        }
    
        if(oldestAge < age) {
            oldestAge = age
            oldestPerson = object[i].name
        }
    }
return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;

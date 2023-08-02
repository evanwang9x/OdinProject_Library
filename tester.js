function dog (object) {
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
const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  console.log(dog(people))

function sumOfObjectContent(object) {
let sum = 0;
    for(let item in object) {
        if (typeof object[item] == "number") {
            sum += object[item];
        }
    }
return sum;
}
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
console.log(sumOfObjectContent(salaries))
*/
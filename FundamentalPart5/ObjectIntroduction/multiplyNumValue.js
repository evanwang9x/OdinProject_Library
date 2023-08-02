/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
  */
 function multiplyBy2 (obj) {
    for (let multiplier in obj) {
        if( typeof obj[multiplier] == "number"){
        obj[multiplier] *= 2;
        }
    }
 }
function revealMenuContent(menu) {
    for(let item in menu) {
        console.log(menu[item])
    }
}

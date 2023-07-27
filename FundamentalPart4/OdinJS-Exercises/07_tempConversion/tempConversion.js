const convertToCelsius = function(Fahrenheit) {
  let Celsius = Math.round(((5/9)*(Fahrenheit-32)) * 10) /10
  if (Celsius < 0) {
    return -Math.abs(Celsius)
  }
  else {
  return Celsius
  }
};

const convertToFahrenheit = function(Celsius) {
  let Fahrenheit = Math.round(((Celsius*9/5)+32) * 10) / 10
  if (Fahrenheit < 0) {
    return -Math.abs(Fahrenheit)
  }
  else {
  return Fahrenheit
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

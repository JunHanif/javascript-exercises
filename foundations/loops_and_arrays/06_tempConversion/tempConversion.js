function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier
}

const convertToCelsius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9;
  return round(celcius, 1)
};

const convertToFahrenheit = function (celcius) {
  let fahrenheit = celcius * 9 / 5 + 32
  return round(fahrenheit, 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

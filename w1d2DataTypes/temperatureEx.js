let prompt = require('prompt-sync')();
let tempInCelsius = prompt('Enter value in celsius: ')
let tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);
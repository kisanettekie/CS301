const prompt= require('prompt-sync')();
let input= prompt("Enter distance in Kilometer: ");
input= parseFloat(input);
let miles= input*0.6214;

console.log(miles);

const prompt= require("prompt-sync")();
let input= prompt("enter volume in quarts: ");
input= parseFloat(input);
let liters = input*0.946353;

console.log(liters);



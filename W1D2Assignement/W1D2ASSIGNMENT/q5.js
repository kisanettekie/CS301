const prompt= require('prompt-sync')();

let age= prompt("Enter your age: ");
age= parseInt(age);

let range=parseInt(220- age);

let fastHeartRate= range*0.85;
let slowHeartRate= range*0.65;

console.log(fastHeartRate);
console.log(slowHeartRate);




const prompt= require("prompt-sync")();
let num= +prompt("enter a number: ");

let result="";
let num1=0; 
let num2=1; 
result = result + num1+","+num2+",";

for (let i = 0; i < num; i++) { 
let sum=num1+num2; 
result+=sum +",";
num1=num2; 
num2=sum; 
} 
console.log(result);
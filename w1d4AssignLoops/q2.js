const prompt= require("prompt-sync")();
let num= +prompt("enter a number: ");
let factorial=1;

for(let i=1; i<=num; i++){
    factorial*=i;

}
console.log(factorial);

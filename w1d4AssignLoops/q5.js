
const prompt = require("prompt-sync")();
let digits=prompt("enter number here")
let sum=0;
for(let i=0; i<digits.length;i++){
 sum+=parseInt(digits[i])
}
console.log(sum);
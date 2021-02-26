
// a)
const prompt= require("prompt-sync")();
let num= +prompt("enter a number: ");
let count=0;

for (let i = 2; i <num; i++) {
    if (num % i == 0) {
        count++;
    }
  }
  
  console.log(count === 0);

  // b)
  let num1= +prompt("enter a number: ");
let isPrime=true;

for (let i = 2; i <num; i++) {
    if (num1 % i == 0) {
        isPrime= false
        break;
    }
  }
  
  console.log(isPrime);

// A)

const prompt= require("prompt-sync")();
let num= + prompt("Enter a number");


function checkPrime(num){
    
    for(let i=2; i<num;i++){
        if(num%i==0){
            return false
        }
    else {
     return true;
    }
    }
   
    
}

console.log(checkPrime(num));

//B)

const prompt= require("prompt-sync")();
let num= + prompt("Enter a number");

function checkPrimeB(n)
for(let i=2; i<num; i++){
    if(num % i === 0){
       console.log("is prime");

    }
}

checkPrimeB(n);
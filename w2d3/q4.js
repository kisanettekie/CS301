"use strict";
//`4. Write a function to compute GCD of two numbers. Write it as a function expression`
////////function declearation
/**
//  * @param {number} num1 positive integer
//  * @param {number} num2 positive integer
//  * @returns {number} gdc
//  * process: loop from 2 to min(num/2, num/2) and test if number divides both,
//  *          last one will be the largest
//  */
function gcd (num1,num2){

let min= Math.min(num1/2,num2/2);
let largest=0;
for( let i=1;i<=min ;i++){
    if(num2%i==0 && num1%i==0){
        largest=i;
    }
}

return largest;

}

console.log(gcd(98,56));
console.log(gcd(20,28));



 
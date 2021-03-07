"use strict";
// Write a function to find LCM of any two numbers using the HCF function from previous
// question. Write it as a function expression.
// a. Now write a program that asks two numbers from the user and displays HCF and LCM of
// the two numbers.
// Hint: search for relation between HCF and LCM.

/**
  * @param {number} num1 positive integer
  * @param {number} num2 positive integer
  * @returns {number} gdc
  * process: loop from 2 to min(num/2, num/2) and test if number divides both,
  *          last one will be the largest
  */



const prompt= require("prompt-sync")();
let num1 = prompt("enter a number");
let num2 = prompt("enter a number ");

function gcd (num1,num2){
    let min= Math.min(num1,num2);
let largest=0;
for( let i=1;i<=min ;i++){
    if(num2%i==0 && num1%i==0){
        largest=i;
    }
}
return largest;
}
console.log(gcd(num1,num2));



/**
* @param {number} num1 positive integer
* @param {number} num2 positive integer
* @returns {number} lcm
* process: loop from num1 * num2 to max(num1,num2) and see if the number can be divided evenly by both,
            last will be lcm
*/

let lcm=function (num,numb){
    let product = num*numb;
    let gcdResult =gcd(num,numb);
    let result=product/gcdResult;

    return result;
};

console.log(lcm(20,12));
const prompt= require('prompt-sync')();
let total= prompt("Enter number of boxes");
total= parseInt(total);

let numBox= prompt("Enter the boxes in each stack");
numBox=parseInt(numBox);

total=Math.ceil(total/numBox) ;

console.log(total);




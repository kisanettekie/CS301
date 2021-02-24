const prompt= require("prompt-sync")();
const x1= prompt("enter x1 coordinate");
const y1= prompt("enter y1 coordinate")
const x2= prompt("enter x2 coordinate");
const y2= prompt("enter y2 coordinate")
const xdiff= x2-x1;
const ydiff= y2-y1;
const sumSquares= Math.pow(xdiff,2) + (Math.pow(ydiff,2));
const distance= Math.sqrt(sumSquares);

console.log(distance);


const prompt= require("prompt-sync")();

const radius= prompt("enter radius of a cylinder: ");
const height= prompt("enter height of a cylinder: ");


const volume= Math.PI*radius*radius*height;
console.log(volume);




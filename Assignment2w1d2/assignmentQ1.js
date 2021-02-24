const prompt= require("prompt-sync")();
let input= prompt("enter volume in quarts: ");
input= parseFloat(input);
let liters = input*0.946353;

console.log(liters);

// q2
let in1= prompt("Enter distance in Kilometer: ");
in1= parseFloat(in1);
let miles= int*0.6214;

console.log(miles);

//q3
let total= prompt("Enter number of boxes");
total= parseInt(total);

let numBox= prompt("Enter the boxes in each stack");
numBox=parseInt(numBox);

total=Math.ceil(total/numBox) ;

console.log(total);

//q4
let startMileage= prompt("Enter begining mileage: ");
startMileage=parseInt(startMileage);

let endMileage= prompt("Enter ending mileage: ");
endMileage= parseInt(endMileage);

let startGallons= prompt("Enter beginning number of gallons of gas: ");
startGallons= parseInt(gallons);

let endGallons= prompt("Enter ending number of gallons of gas: ");
endtGallons= parseInt(gallons);


let milesPerGallon= (endMileage - startMileage)/ (startGallons-endtGallons) ;

console.log(milesPerGallon);

//q5
let age= prompt("Enter your age: ");
age= parseInt(age);

let range=parseInt(220- age);

let fastHeartRate= range*0.85;
let slowHeartRate= range*0.65;

console.log(fastHeartRate);
console.log(slowHeartRate);

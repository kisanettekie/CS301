const prompt= require('prompt-sync')();
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

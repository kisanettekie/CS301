
// A)
const prompt= require("prompt-sync")();
let radius= + prompt("Enter a radius");

function areaOfCircle(radius){
    let area= Math.PI*radius*radius;
    console.log(area);
}

areaOfCircle(radius);

// B )

let height=+ prompt("enter height");

 function volumeOfCylinder(height){
        let volume= areaOfCircle(radius)*height
        console.log(volume);
 }
 volumeOfCylinder(height);
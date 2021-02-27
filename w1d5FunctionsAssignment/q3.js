const prompt= require("prompt-sync")();
let width= + prompt("Enter a width: ");
let depth= + prompt("Enter a depth: ");
let height= + prompt("Enter a height: ");
let sweep= + prompt("Enter a sweep: ");


function livingVolume(w,h,d){
    return width*depth*height;
}
function triangleArea(s1,s2,w){
    let s= (s1+s2+w)/2;
    let area= Math.sqrt(s * (s-s1)*(s-s2)*(s-w));
    return area;
}

function roofArea(s1,s2,w,d){
    let result= triangleArea(s1,s2,w) * d;
    return result;

}

function houseVolume(w,h,d,s1,s2,w,d){

   let res=livingVolume(w,h,d) + roofArea(s1,s2,w,d);
   return res;

}

console.log(houseVolume(width,height,depth, sweep,sweep,width,depth));

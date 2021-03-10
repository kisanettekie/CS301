// A

// function pow(a,n){
//     if(n === 0){
//         return 1;
//     }else{
//         return a * pow (a,n-1);
//     }
// }
// console.log(pow(5,2));

// B

function digit(n){
    if(n === 0){
        return 0;
    }else{
        return 1 + digit(parseInt(n/10));
    }
}
console.log(digit(23456));





// function reverse(str){
//     if(str === ""){
//         return "";
//     }else{
//         let result= str.substring(str.length-1);
//         return result + reverse(str.substring(0,str.length-1));
//     }
// }
// console.log(reverse("kisanet"));
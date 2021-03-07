
// /**
//  * @param {number} num1 positive integer
//  * @param {number} num2 positive integer
//  * @returns {number} gdc
//  * process: loop from 2 to min(num/2, num/2) and test if number divides both,
//  *          last one will be the largest
//  */
// const gcd= function(num1,num2){
//     let largest=null;
//     const loopLimit= Math.min(num1/2, num2/2);
//     for(let i=2; i<=loopLimit; i++){
//         if(num1%i===0 && num2%i===0){
//             largest=i;
//         }
//     }
//     return largest;
// }
// console.log("expect 4 from 20 and 28:", gcd(20,28));


// /**
//  * @param {number} num1 positive integer
//  * @param {number} num2 positive integer
// * @returns {number} lcm
// * process: loop from num1 * num2 to max(num1,num2) and see if the number can be divided evenly by both,
//             last will be lcm
// */

// const lcm= function(num1,num2){

// }

// let styles=["Jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles[1]="Classic";
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Rap", "Reggae");
// console.log(styles);


// function addend(arr){
//     let first= arr[0];
//     let last= arr[arr.lenght-1];
//     return  first+last;
    
// }
// function getMiddle(arr){
//     let mid= Math.ceil(arr.length)/2;
//     if(arr.length%2===0){
//         return (arr[mid-1]+ arr[mid])/2; 
//     }else{
//         return arr[mid];
//     }
    
// }

// function rotateLeft(arr){
//     let first=arr[0];
//     for(let i=0; i<arr.length;i++){
//         arr[i]= arr[i+1];
//     }
//     arr[arr.length-1]= first;
//     return arr;
// }

// function rotateRight(arr);

// let last= arr[arr.length-1]
// for(let i=arr.length; i>0;i--){
//     arr[i]=arr[i-1];  
// }
//     arr[0]= last;
//     return arr;

function rotate(arr,n){
    

}
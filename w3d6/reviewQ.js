
//q1
function sumOfPrimeEven(arr) {
    let sum = 0;
    // let i;
    // if (arr[i] > 1) {
    for (let i = 2; i < arr.length; i++) {
    if (arr[i] % i !== 0) {
    // sum++;
    sum = sum + [i];
     
    }
    }
    console.log([1, 2, 3, 4, 5, 6]);
    if (sum % 2 === 0) {
    console.log("true");
    }
    } else {
    console.log("false");
    }
    }
    console.log(sumOfPrimeEven([1, 2, 2, 3, 9]));
    
//q2. 
    function perfectlyOdd(arr) {
        // if (array.length === 0) {
        // return false;
        // }
        // for (let i = 0; i < arr.length; i++) {
        // if (i % 2 !== 0 && arr[i] % 2 !== 0) {
        // return true;
        // } else {
        // return false;
        // }
        // }
        // }
        // console.log(perfectlyOdd([2, 1, 2, 3]));


//q4
        // function middlechar(string){
//   let mid = (string.length/2);
//   if(string.length%2===0){
//     return string[(mid-1)]+string[(mid)];
 
//   }
//   else{
//     return string[(Math.floor(mid,mid+1))];
//   }
// }
 
// console.log(middlechar("luwamf"))
// console.log(middlechar("luwam"));
    //}

// q3


//function sumOddIndices(arr) {
// let sum = 0;
// for (leti = 0; i < arr.length; i++) {
// if (i % 2 !== 0) {
// sum += arr[i];
// }
// }
// return sum;
 
// }

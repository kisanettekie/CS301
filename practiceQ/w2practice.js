
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
// function getMiddle(array){
//     let mid;
//     mid=(array.length)/2;
//     if(array.length%2===0){
//     return (array[mid-1]+array[mid])/2;
//     }else{
//     return array[Math.ceil((array.length-1)/2)];
//     }
//     }
//     console.log(getMiddle([1,2,3,4,5]))

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


//function sumColumns(arr){
        
        // let sum 
        // let c
        // r=0
        // sum=0
        // while(r<arr.length){
        //   c=0
        
        // while(c<arr[r].length){
        // sum=sum+arr[r][c]
        // c++
        // }
        // r++
        // }
        // return sum
        // }
        // let arr=[[1,2,3,],
        //     [4,5,6],
        //     [7,8,9]];
        // console.log(sumColumns(arr));




// let total=0;
// let j=0
//     for(let i=0;i<arr.length;i++){
//         total+=arr[i][j];
        
        
//         for( j=0; j<=arr.length;j++){
//             total+=arr[i][j]

//         }
        
//     }
//     return total;
// }

//     let arr=[[1,2,3,],
//              [4,5,6]];
    
//         console.log(sumColumns(arr));






















    // function sumColumns(arr){
    //     let sum=0;
    //         for(let i= 0; i<arr.length;i++){
           
    //             for(let j=0;j<arr[i].length;j++){
    //                 sum+=arr[i]
    //             }
    //             return sum;  
    //         }
    // }

    // let arr=[[1,2,3,],
    //         [4,5,6]]
    // console.log(sumColumns(arr));
  

    // function fmrString(arr){
    //     let total =0
    //     let sum =[];
    //     for(let i=0; i<arr.length; i++){
    //     if(arr[i]>0){
    //     sum.push(arr[i])
    //     }
    //     }
    //     sum= sum.toString().split('') 
    //     for(let ele of sum){
    //     if(ele!==','){
    //     total += Number(ele)
    //     }
    //     } 
    //     return total 
    //    }
    //    let arr=[32,105,-22]
    //    console.log(fmrString(arr));

//{=====================================================}
//ARRAY METHODS QUIZ







































//{---------------------------------------------------------------}
// EXCERCISE FROM W3.RESOURCES
// 1.Write a JavaScript function to check whether an `input` is an array or not.

// function checkIf(input){
//     if(toString.call(input)=="[object array]"){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkIf("Hello"));
// console.log(checkIf([1,2,3,3]));

// 2. Write a JavaScript function to clone an array

// function toClone(arr){
//         return arr.slice(0);

// }
// console.log(toClone([1,2,3,4,5]));   ??????? 

// 3.  Write a JavaScript function to get the first element of an array. 
//     Passing a parameter 'n' will return the first 'n' elements of the array.

// function first(arr,n){

// if(arr==null){
//     return 0;
// }
// if(n==null){
//     return arr[0];
// }
// if(n<0){
//     return arr.slice(0,n);
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

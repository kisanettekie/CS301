// Q1


// function secLarge(arr){
//     let arr1=[];
//     let secondLargest=0;

//     for(let i=0; i<arr1.length;i++){
        
//         if(arr1.indexOf[i] < arr1.indexOf[i+1] && arr1.indexOf[i+1]< arr1.indexOf[i+2]){
//             secondLargest=arr[i+1];

//         }
//         return secondLargest;

//     }
    
// }
// console.log(secLarge([1,2,3,5]));

// find the largest first, remove that and do the largest again and that will be the second largest

function secLarge(arr){
    arr.sort;
    let largest=arr[0];

    for(let i=0; i<arr.length;i++){
        if(arr[i]>largest){
            arr.pop;
            largest=arr[i];
            return largest;
        }
    else{
        return largest;

    }
        
    }
console.log(secLarge([1,2,3]));
    
}



// Q2

// function isEvenDenom(arr){

//     let evenCount=0;
//     let oddCount=0;

//     for(let i=0; i<arr.length;i++){
//         if(arr%2==0){
//             evenCount+=arr[i];
//         }
//         if(arr%3==0){
//             oddCount+=arr[i]
//         }
        
//     }
//     if(evenCount>oddCount){
//         console.log("even dom")
//     }
//     else{
//         console.log("odd dom")
//     }
    
// 
// }
// console.log(isEvenDenom([1,2,3,6,8,4,4,2]))


//    Q3


// function deleteArrayElement(num, index){
//     for(let i=0; i<num.length;i++){
//         if(num==num){

//         }
//     }


// }

//create a new array copy the original except the index, and return that array. 
// as long n is not equal to the index continue on copying

//Q4

// function countDuplicate(arr){
//     let count=0;
//     for(let i=0; i<arr.length;i++){
        
//         for(let j=0; j<arr.length; i++){
//             if(arr[i]===arr[j]){
//                 count+=arr[i]
//             }
//             return count;
//         }
//     }
    
// }
// console.log(countDuplicate([2,2,3,4,4,3,2]))

// sort it so all duplicates are together, 
//if the first value is the same as the next one, skip to the other 
// a[]=== a[i+1] ==>count it



//Q5    

// function arrEqual(num1, num2){
//     let count=0;
//     for(let i =0; i<num1.length || i<num2.length;i++){
//         if(num1.)


//     }
// }



// function suffix(str1, str2){
//     let count=1;

//     for(let i=str1.length-1; i>=0;i--){
//         if(str1[str1.length-1-i] === str2[str2.length-1-i]) {
//             count++;
//             continue;
//         }
//         break;
//     }
//     let result= str2.slice(count);

//     return result;
// }
//     console.log(suffix("walking","leading"));
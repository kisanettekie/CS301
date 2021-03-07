// /**
// *
// * @param {array} arr;
// * @returns {number} result of addition of first and last elements of the array
// */
// function addends(arr){
//     let theFistValue=arr[0];
//     let theLastVlue=arr[arr.length-1];
//     return (theFistValue+theLastVlue);
//     }

// /**
// *
// * @param {number} array;
// * @return {number};
// */
// function getMiddle(array){
//     let mid;
//     mid=(array.length)/2;
//     if(array.length%2===0){
//     return (array[mid-1]+array[mid])/2;
//     }else{
//     return array[Math.ceil((array.length-1)/2)];
//     }
//     }

//     /**
// *
// * @param {number} arr;
// * @return {number};
// */
// function rotateLeft(arr){
//     arr.push(arr.shift());
//     return arr;
//     }
//     let array3=[2,3,4,5,6,7,8];
//     //console.log(rotateLeft(array3));


// /**
// *
// * @param {number} arr;
// * @return {number};
// */
// function rotateRight(arr){
//     arr.unshift(arr.pop());
//     return arr;
//     }

// function rotateN(arr, n){
//     let nRotated= arr;
// for(let i=1; i<=n; i++){
//     nRotated=rotateRight(arr);
// }
// return nRotated;
// }

/**
 * @param {array} arr parameter
 * @param {number} num1 parameter that should be less than the array at i
 * @param {number} num2 parameter that should be greater than the array at i
 * @returns {array}
 * process: create a count variable that tracks the value found greater than and lesser than i
 *          and adds them to the new array
 */

// function filterRange(arr,opd1,opd2){
//     const newArr=[];
//     let arrLngth=arr.length;
//     let count=0;
//     for(let i=0;i<arrLngth;i++){
//     if(arr[i]>=opd1 && arr[i]<=opd2){
//     newArr[count++]=arr[i];
//     }
    
//     }
//     return newArr;
//    }
//    let arrr=[0, 100, 3, 6, -555];
//    console.log(filterRange(arrr,6,120));

/**
    * 
    * @param {number} matr1;
    * @param {number} matr2;
    * @return{number};
    */
   function matrixAddition(matr1,matr2){
 
    let newm=[];
    for(let i=0;i<matr1.length;i++){
    //let sum=0;
    for(let j=0;j<matr1[i].length;j++){
    //sum+=matr1[i][j]+matr2[i][j];
    newm.push(matr1[i][j]+matr2[i][j]);
    }
    console.log();
    }
    return newm;
    }
    
    let matr1=[[0,1,2],[9,8,7]];
    let matr2=[[6,5,4],[3,4,5]];
    console.log(matrixAddition(matr1,matr2));  












//module.exports= {addends,getMiddle,rotateLeft,rotateRight}

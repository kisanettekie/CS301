/**
*
* @param {array} arr;
* @returns {number} result of addition of first and last elements of the array
*/
function addends(arr){
    let theFistValue=arr[0];
    let theLastVlue=arr[arr.length-1];
    return (theFistValue+theLastVlue);
    }

/**
*
* @param {number} array;
* @return {number};
*/
function getMiddle(array){
    let mid;
    mid=(array.length)/2;
    if(array.length%2===0){
    return (array[mid-1]+array[mid])/2;
    }else{
    return array[Math.ceil((array.length-1)/2)];
    }
    }

    /**
*
* @param {number} arr;
* @return {number};
*/
function rotateLeft(arr){
    arr.push(arr.shift());
    return arr;
    }
    let array3=[2,3,4,5,6,7,8];
    //console.log(rotateLeft(array3));


/**
*
* @param {number} arr;
* @return {number};
*/
function rotateRight(arr){
    arr.unshift(arr.pop());
    return arr;
    }














module.exports= {addends,getMiddle,rotateLeft,rotateRight}

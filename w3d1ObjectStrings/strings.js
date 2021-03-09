
//exports.isPersonEqual= isPersonEqual;

//Q1

// let car={};

// car.make="Toyota";
// car.model="Camry";
// console.log(car);

// car.model="RAV4";
// console.log(car);
// delete car.make;
// console.log(car);


// //Q2

//  const person1={
//         name: "Kisanet",
//         age: 12
//     };
//     const person2={
//         name: "Kisanet",
//         age: 12
    
//     };
//     const person3={
//         name: "Luwam",
//         age: 15
    
//     };

// function isPersonEqual(obj1,obj2){
//     if(obj1.name === obj2.name && obj1.age === obj2.age){
//         return true;
//     }else{
//         return false;
//     }

// }
// console.log("Expect true:",isPersonEqual(person1,person2));
// console.log("Expect false:", isPersonEqual(person1,person3));

// Q3

// function countProperties(obj){
//     let count=0;
//     for(const properties in obj){
//             count++;
//     }
//     return count;    
// }


// // Q4

// function checkSpam(str){
//     if(str.includes("lottery") || str.includes("prize")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkSpam("Kisanet"));
// console.log(checkSpam("lottery"));


// // Q5
// function commonSuffix(strg1,strg2){
//     let index=0;
//     let count=0;
//     let ln2= strg2.length-1;
//     for(let i=strg1.length-1;i>=0;i--){
//     if(strg1[i]===strg2[ln2-count]){
//     index++;
//     count++;
//     continue;
//     }
//     break;
//     }
//     let charStart=strg1.length-index;
//     let result=strg1.slice(charStart,strg1.length);
//     return result;
//    }
    
//    console.log(commonSuffix("chikk","learnikk"));


//    // Q6

//    function titleCase(s){
//     let sliced= s.slice(0,1);
//     let result= sliced.toUpperCase();
//     let theRest= result + s.slice(1);
//     return  theRest;
// }
// console.log(titleCase("nahom"));





// Q7

// function getAverageAge (users){
//   let sum=0;

//   for(let i=0; i<users.length; i++){
//       sum+=users[i].age;
//   }
//   return sum/users.length;
// }
//  let object1 = {
//      name: "abc",
//      age: 20
//  }
//  let object2= {
//      name:  "xyz",
//      age: 10
//  }
//  let users = [ object1, object2];
//  console.log(getAverageAge(users));


//  Q8

function addFirst(arr){
    
    let sum=0;

for (let i=0 ;i<arr.length;i++){
  
    

    for(let j=0; j<arr[0].length;j++){
        sum+=arr[i][j]
    
    }
    return sum
}


}
console.log(addFirst([1,2],[3,4],[5,6]));
















 
// function swap(a,b){
// let temp=a;
// a=b;
// b=temp;
// console.log(a,b);
// }
// console.log(swap(5,4));


//Q7
 
// function getAverageAge(users){
 
// let sum=0;
// for(let i=0;i<users.length;i++){
// sum+=users[i].age;
// }
// return sum/users.length;
// }
   







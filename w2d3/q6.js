"use strict";
// . Write a function compute, that takes three parameters. First parameter is a call back function
// that does the actual operation, second and third are the operands.
// For e.g., compute (add, 2,3) should return 5
// - Write compute function as a function expression.
// - Write add function as a function expression and call compute passing add as a callback.
// o Refactor to pass add logic as an anonymous function. (Make a copy first)
// o Refactor to pass add logic as an arrow function. (Make a copy first)


/**
 * 
 * @param {number} result1;
 * @return{number};
 */
    function result(result1){
        console.log("result is "+ result1);
    }
/**
 * 
 * @param {number} num1;
 * @param {number} num2; 
 * @param {function} myCallback;
 * @return {function};
 */
    let compute= function (num1,num2,myCallback){
        let add= num1+num2;
        myCallback (add);
    };

    compute(2,3,result);
/**
 * 
 * @param {function} add; 
 * @param {number} num3; 
 * @param {number} num4; 
 * @return {number};
 */
     function computeMethod1(add,num3,num4){
        return add(num3,num4);
        }
       /**
        * 
        * @param {number} num3;
        * @param {number} num4;
        * @return {number};
        */  
        function add(num3,num4){
        return num3+num4;
        }
        console.log(computeMethod1(add,6,3));
        
        
         
        console.log("***************** function expression /anonymous function**********************");

         
        let computey=function(added,num5,num6){
        return added(num5,num6);
        };
        let added=function(num5,num6){
        return num5+num6;
        };
         
        console.log(computey(added,6,3));
        console.log("***************** Arrow function **********************");
        /**
         * 
         * @param {function} add;
         * @param {number} num7;
         * @param {number} num8 ;
         * @return{number};
         */
        let computed=(add,num7,num8)=>addedd(num7,num8);
        let addedd=(xxx,yyy)=>xxx+yyy;
        console.log(computed(add,6,3));
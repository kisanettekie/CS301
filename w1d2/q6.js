function getGHF(num1,num2){
    let min=Math.min(num1, num2)
    let gcf=1;
    for(let i=2;i<=min;i++){
    if(num1%i===0 && num2%i===0){
    gcf=i
    }
    }
    return gcf;
   }
   console.log(getGHF(100,230));


let lcm= function(num1, num2){
let product = num1*num2;

return product/getGHF(num1,num2);
}
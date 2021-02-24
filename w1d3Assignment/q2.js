const prompt= require("prompt-sync")();
let name= prompt("Enter name");
let numCredit=+prompt("Enter number of credits");


if(numCredit>0 && numCredit<30){
    console.log(name + "Freshman");
}else if(numCredit>=30 &&  numCredit<60){
    console.log(name + "Sophomore");
}else if(numCredit>=60 &&  numCredit<90){
    console.log(name + "Junior");
}else {
    console.log(name + "Senior");
}

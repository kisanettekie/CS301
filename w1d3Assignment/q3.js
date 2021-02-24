const prompt= require("prompt-sync")();
let costH= +prompt("Enter cost of the house: ");
let downD;

if(costH<50000){
    downD=costH*0.05;
}
else if(ccostH<100000){
    downD=1000+0.10*(costH-50000);
}
else if(costH<200000){
    downD=2000+0.15*(costH-100000);
}
else{
    console.log(50000+0.10*(costH-200000));
}
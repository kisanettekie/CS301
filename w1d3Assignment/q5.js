const prompt= require("prompt-sync")();
let age= +prompt("Enter child age: ");
let season = prompt("Enter season: ");

if(age<5){
    if(season==="summer" || season==="fall"){
        console.log("bed time is 8:30");
    }else {
        console.log("bed time is 8:00");
    }
}else if(age<12){
    if(season==="summer"){
        console.log("bed time is 9:30");
    }
    else {
        console.log("bed time is 8:30");
    }
}
else{
    if(season==="summer"){
        console.log("bed time is 10:30");
    }
    else{
        console.log("bed time is 9:30");
    }
}
const prompt= require("prompt-sync")();
let input= prompt("enter today's weather ");

if(input==="hot"){
    console.log("You can wear sandals");
}
else if(input==="rain"){
    console.log("galoshes");
}
else if(input==="snow"){
    console.log("galoshes");
}else{
    console.log("wear sneakers");
}
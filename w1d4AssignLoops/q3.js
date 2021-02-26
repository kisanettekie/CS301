const prompt= require("prompt-sync")();
let guess= prompt("enter a guess: ");
const count= 3;
const pin="kisa"
let message;


 let i=0;
while(i<count){
    if(guess===pin){
        message=("Correct, welcome back");
        break;

    }else if(guess!==pin){
        guess= prompt("Incorrect, try again.");
        i++;
     }
     else if(i===3){
        message=("Sorry but you have been locked out");
     }
    }
    console.log(message);

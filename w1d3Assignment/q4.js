const prompt= require("prompt-sync")();
let borrower= prompt("Enter borrower")
let numBoook=+prompt("Enter number of books");




if(borrower=== "student"){
    if(numBoook==0){
       
        console.log("6 weeks");
    }else if(numBoook<3){
    
        console.log("4 weeks");

    } else{
        
        console.log("2  weeks");
    }
}
else if(borrower=="faculty"){
    if(numBoook==0){
      
        console.log("12 weeks");
    }
    else if(numBoook<3){
     
        console.log("10 weeks");
    }
    else if(numBoook>=3){
        
        console.log("8 weeks");
    }
}
else if(borrower==="other"){
    if(numBoook==0){
        console.log("4 weeks");
    }
    else if(numBoook<3){
        console.log("3 weeks");
    }
    else if(numBoook>=3){
        console.log("2 weeks");
    }
}

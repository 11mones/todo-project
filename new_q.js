'use strict'
var array =[];
function threeQuestions (array){
    
        array[0] = prompt("Do you like watching football games ? (Y/N)");
     

        array[1] = prompt("Do you like chess ? (Y/N)");
     
        array[2] = prompt("Have you ever tried before to manage your time ? (Y/N)");
      
}
function fillArray(array){
    for(let i =0 ;i<=2;i++){
        if(array[i] .length == 0){
            array[i] = "invalid";
        }
    }
}

function printArr(array){
for(let i =0;i<=2;i++){
    console.log(array[i]);
    console.log("\n");
}
}
threeQuestions(array);
fillArray(array);
printArr(array);
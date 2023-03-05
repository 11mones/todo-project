var array =[];
function threeQuestions (array){
    
        array[0] = prompt("Do you like watching football games ? (Y/N)");
        if(array[0].length == 0){
            array[0] = "invalid";
        }

        array[1] = prompt("Do you like chess ? (Y/N)");
        if(array[1].length == 0){
            array[1] = "invalid";
        }
        array[2] = prompt("Have you ever tried before to manage your time ? (Y/N)");
        if(array[2] .length == 0){
            array[2] = "invalid";
        }
}
function printArr(array){
for(let i =0;i<=2;i++){
    console.log(array[i]);
    console.log("\n");
}

}
threeQuestions(array);
printArr(array);
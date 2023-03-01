var name , age; 
var gender = "";
name = prompt("What is your name?");
gender = prompt("Are you male or female? (Your answer should be 'male' or 'female')");
age= prompt("How old are you?");
if(age <= 0){
    alert("You entered negative value as age");

}
var w = confirm("Do you want us to welcome you ? ^__^");
if(w == true){
    if(gender == "male"){
        alert("Welcome, Mr. " + name);
    }
    else if( gender == "female"){
        alert("Welcome, Ms. " + name);
    }
    else {
        alert("Welcome, to our website");
    }
};


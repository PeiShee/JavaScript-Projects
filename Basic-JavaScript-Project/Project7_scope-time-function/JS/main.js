//Global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2 () {
    document.write(X + 100 + "<br>");
}
Add_numbers_1 ();
Add_numbers_2 ();

//Local variable
function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}

function Add_numbers_4 () {
    document.write(Y + 100 + "<br>");
}
Add_numbers_3 ();
Add_numbers_4 ();

//debug using console.log() method
function Add_numbers_5() {
    var Z = 10;
    console.log(20 + Z + "<br>");
}

function Add_number_6 () {
    console.log(Z + 100  + "<br>");
}
Add_numbers_5 ();
Add_numbers_6 ();

//If Statement with Date().getHours()
function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Else Statement
function Age_Function () {
    Age = document.getElementById("Age").value;
    if (Age>= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
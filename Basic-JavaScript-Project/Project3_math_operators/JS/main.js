//get randam number from 0 to 100. If get random number then dont write *100
window.alert(Math.random() * 100);

//Unary operator
var x = 5.25;
x--;
document.write(x);

//Addition function
function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math1").innerHTML = "2 + 2= " + addition;
}


// substraction function
function substraction_Function() {
    var Substraction  = 2-2;
    document.getElementById("Math2").innerHTML = "2 - 2 = " + Substraction;
}

// Multiplication function (this is wrong)
function multiplication() {
    var simple_Math = 2*2;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

// Multiplication function (this is correct, the function need to be the same as onlick )
function multiplication_Function() {
    var simple_Math = 2*2;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

//divide function
function division_Function() {
    var simple_Math = 2 / 2;
    document.getElementById("Math4").innerHTML = "2 / 2 = " + simple_Math;
}

//multiple math operation
function simplemath_Function() {
    var simple_Math = (2+2) * 2 / 2 -2;
    document.getElementById("Math5").innerHTML = "2 plus 2, multiplied by 2, divided in 2 and then substracted by 2 equals " + simple_Math;
}

//remainder after division
function modulus_operator_Function() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: "+ simple_Math;
}

//can be incresent or decresent
function negation_operator_Function() {
    var x = 2;
    document.getElementById("Math7").innerHTML = -x;
}



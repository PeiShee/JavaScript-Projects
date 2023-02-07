function addition_Function() {
    var addition = 2+2;
    document .getElementById("Math1").innerHTML = "2 + 2= " + addition;
}

function substraction_Function() {
    var Substraction  = 2-2;
    document .getElementById("Math2").innerHTML = "2 - 2 = " + Substraction;
}

function multiplication() {
    var simple_Math = 2*2;
    document .getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function addition_Function() {
    var simple_Math = 2 / 2;
    document .getElementById("Math4").innerHTML = "2 / 2 = " + simple_Math;
}

function addition_Function() {
    var simple_Math = (2+2) * 2 / 2 -2;
    document .getElementById("Math5").innerHTML = "2 plus 2, multiplied by 2, divided in 2 and then substracted by 2 equals " + simple_Math;
}

function modulus_Operator () {
    var simple_Math = 25 % 6;
    document .getElementById("Math6").innerHTML = "When you divide 25 bu 6 you have a remainder of: "+ simple_Math;
}


function negation_Operator () {
    var x = 2;
    document .getElementById("Math7").innerHTML = -x;
}

var x = 5.25;
x--;
document.write(x);

window.alert(math.random() * 100);
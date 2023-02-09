//Type of Operator, sting or number.
document.write(typeof "word");
document.write(typeof 3);


//Not a number NaN() function
function my_Function1 () {
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_Function2 () {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function my_Function3 () {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

//Negative infinity
document.write(2E10);
document.write(-2E10);

//Boolean Logic
document.write(10 > 2);
document.write(10 < 2);

//Type Coercion displaying 105
document.write("10"+5);


//Display false in console in browser by clicking more tools, developer tools and console.

console.log(2 + 2);

var x = (10<2)
console.log(x);

//Double equal trueëqual in data type and value.
document.write (10 == 10);
document.write (10 == 5);

//triple equal Return true by ensuring to match the data type and value.
x = 10;
y = 10;
document.write (x === y);

//triple equal Return false by writing a different data type and different value.
x = 10;
y = "blue";
document.write (x === y);


//triple equal Return false by writing a different data type but the same value for both.
x = 10;
y = "10";
document.write (x === y);


//triple equal Return Return false by writing the same data type but a different value for both.
x = 10;
y = 5;
document.write (x === y);

//AND logical operator
document.write (5>2 && 10 >4);
document.write (5>2 && 10 <4);

//Or logical operator
document.write (5>2 || 10 <4);
document.write (5<2 || 10 <4);

//Not Operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
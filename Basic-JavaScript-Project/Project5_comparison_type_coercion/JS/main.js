document.write(typeof "word");
document.write(typeof 3);

function my_Function1 () {
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_Function2 () {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function my_Function3 () {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

document.write(2E10);
document.write(-2E10);

document.write(10 > 2);
document.write(10 < 2);

document.write("10"+5);

console.log(2 + 2);



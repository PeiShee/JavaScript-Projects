document.write(typeof "word");
document.write(typeof 3);

function my_Function1 () {
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_Function2 () {
    document.getElementById("Test2").innerHTML = isNAN('This is a string');
}

function my_Function3 () {
    document.getElementById("Test3").innerHTML = isNAN('007');
}
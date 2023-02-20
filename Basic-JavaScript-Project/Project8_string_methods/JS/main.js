//Concatenates method
function full_Sentence () {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "Sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice method 27 and 33 is the position where the words are intended to be display.
function slice_Method () {
    var Sentence = "All work and no play makes Johhny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//Changed to upper case
function myFunction() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
    text.toUpperCase();
  }

//search() method
let text2 = "Mr. Blue has a blue house"
let position = text2.search("has");
    document.getElementById("demo2").innerHTML = position;

//number method: toString()
function string_Method() {
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision Method giving number with specific length
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed() method rounded to specified number of decimals.
let num = 5.56789;
let n = num.toFixed(2);
document.getElementById("demo3").innerHTML = n;

//valueOf() method
let text = "Hello World!";
let result = text;
document.getElementById("demo4").innerHTML = result;
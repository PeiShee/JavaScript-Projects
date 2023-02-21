//Loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//String Length
let text = "Hello World!";
let length = text.length;

document.getElementById("demo").innerHTML = length;

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop () {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array
function array_Function () {
    var Series_Number = [];
    Series_Number[1] = "0";
    Series_Number[2] = "1";
    Series_Number[3] = "2";
    Series_Number[4] = "3";
    document.getElementById("Array").innerHTML = "I want series number with index 2, the answer will be " + Series_Number[3] + "."
}
//const keyword
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Object with properties and methods.
let car = {
    make: "Dodge",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//loop with continue
let text1 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text1 += "The number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text1;

//loop with break
let text2 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text2 += "The number is " + i + "<br>";
}

document.getElementById("demo2").innerHTML = text2;
//Let and Var
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>"+ X);
}
document.write("<br>" + X);

var Y = 82;
document.write(Y);
{
    var Y = 33;
    document.write("<br>"+ Y);
}
document.write("<br>" + Y);


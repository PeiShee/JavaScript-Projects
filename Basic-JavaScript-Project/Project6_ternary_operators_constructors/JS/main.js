//ternary operator
function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short.":"You are tall enough.";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vote_Function () {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";
}

//Keywords and Constructors.

function Student(Age, Subject, Mark, Grade) {
    this.Student_Age = Age;
    this.Student_Subject = Subject;
    this.Student_Mark = Mark;
    this.Student_Grade = Grade;
}
var PeiShee = new Student("18", "Biology", 70, "B", "True");
var Daniel = new Student("19", "Chemistry", 80, "A", "True");
var Erik = new Student ("18", "Chemistry", 60, "C", "False" );
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Daniel at the age of "+ Daniel.Student_Age + " score " + Daniel.Student_Mark +
    " in "+ Daniel.Student_Subject 
}

//Nested Function: Function within a function
function Nested_Function () {
    document.getElementById("Counting").innerHTML = Count ();
    function Count () {
        var Starting_point = 9;
        function Plus_one () {Starting_point += 1;}
        Plus_one () ;
        return Starting_point;
    }
}

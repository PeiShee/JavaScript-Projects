function Student(Age, Subject, Mark, Grade) {
    this.Student_Age = Age;
    this.Student_Subject = Subject;
    this.Student_Mark = Mark;
    this.Student_Grade = Grade;
}
var PeiShee = new Student("18", "Biology", 70, "B");
var Daniel = new Student("19", "Chemistry", 80, "A");
var Erik = new Student ("18", "Chemistry", 60, "C" );
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Daniel at the age of "+ Daniel.Student_Age + " score " + Daniel.Student_Mark +
    " in "+ Daniel.Student_Subject;
}
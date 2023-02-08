//Dictionaries function with key-value pair.(KVP). Cannot use idenitical key.
function my_Dictionary () {
    var student = {
        Name:"Pei Shee Tan",
        Age:28,
        Gender: "Female"
    };
//Operators as Owrds, eg delete operator produce undefined answer.
    delete student.Name
    document.getElementById("Dictionary").innerHTML = student.Name;
}
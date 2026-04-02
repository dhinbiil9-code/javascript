//function addnumber(a, b)
// {
//     return a + b;
// }
// console.log(addnumber(5, 5));

// function student(firstname, lastName, age, country) {
//     var studentData;
//     StudentData = firstname + " " + lastName;
//     studentData += " is " + age + " Years old.";
//     studentData += " He/She Is from " + country;
//     return studentData;
// }
function studen(firstName, LastName, gender, age, country) {
    var studentData;
    if (gender == "Female") {
        studentData = firstName + " " + LastName;
        studentData += " is " + age + " Years old.";
        studentData += firstName + "is a " + gender;
        studentData += "and is from " + country;
    } else
    {
        studentData = firstName + " " + LastName;
        studentData += " is " + age + " years old. ";
        studentData += firstName + "is a " + gender;
        studentData += " and is from " + country;

    }
    return studentData;
}
console.log(studen("faisa", "yusuf", "female", 24, "Egypt"));

console.log(studen("ilyaz", "ahmed", "male", 20, "somalia"));

// let originalObject = ["Alli", "Jama", "Farah", "Sahra", "Fartuun"];
// function printthfirttwo(p1, p2, ...others) {
//     console.log(p1, p2, others)
// }

// printthfirttwo("Alli", "Jama", "Farah", "Sahra", "Fartuun");

// function printthfirttwo(p1, p2, ...others) {
//     console.log(p1, p2, others(2))
// }

// printthfirttwo("Alli", "Jama", "Farah", "Sahra", "Fartuun");

let persons = {
    firstname: "Alli",
    lastname: "Mohamed",
    age: 20,
    ismarried: true

}
// console.log(persons.firstname);
// console.log(persons["firstname"]);

let {  firstname, ...rest } = persons
console.log(firstname,rest.age)
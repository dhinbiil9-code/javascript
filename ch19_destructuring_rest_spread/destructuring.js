
// let friends = ["Ali", "jama", "Farah", "Sahra"]

// let [a, b, c] = friends

// console.log("my friend is called " + friends(0))
// console.log("my friend is called " + friends(1))

let persons = {
    firstname: "Alli",
    lastname: "Mohamed",
    age: 20,
    ismarried: true
    
}
// console.log(persons.firstname);
// console.log(persons["firstname"]);

let { age,firstname,lastname } = persons
console.log(firstname, lastname, age)
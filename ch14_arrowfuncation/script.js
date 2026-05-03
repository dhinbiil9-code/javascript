// tradition function "funtion:misspelled word"
// function multiply(x) {
//     return 5 * x

// }
// console.log(multiply(20))

// variable  function "funtion:misspelled word"

// let  multiply= function (x) {
//     return 5 * x

// }
// console.log(multiply(20))

// let multiply = (x) => {
//     return 5 * x;
// };
// console.log(multiply(20))

// let listname = function () {
//     console.log("Ali")
//     console.log("mohamed")
//     console.log("fartun")

// }
// listname()


// let listname =  ()=> 
//     console.log("Ali")
//     console.log("mohamed")
//     console.log("fartun")
// listname()

// let listname = (x,y,z) =>
//     console.log("Ali")
// console.log("mohamed")
// console.log("fartun")
// listname()

// let printupper = function (onename) {
//     console.log(onename.toUpperCase ())
// }
// let listoffreiend = ["fartun", "hani", "ali"]
// listoffreiend.forEach(printupper);


// let listoffreiends = ["fartun", "hani", "ali"];
// listoffreiends.forEach(function (onename) {
//     console.log(onename.toUpperCase());
// });

// let listoffreiends = ["fartun", "hani", "ali"];
// listoffreiends.forEach( (onename) =>console.log(onename.toUpperCase()));

// let listoffreiends = ["fartun", "hani", "ali"];
// listoffreiends.forEach( onename => console.log(onename.toUpperCase()));

// listoffreiends.map()
// listoffreiends.reduce()
// listoffreiends.filter()

// let listoffreiends = ["fartun", "hani", "ali"];
// let multiplier = function (x) { 
//     return x * 2
// }
// let marks = [20, 30, 40, 9, 51,33,66]; 
// let marksdouble = marks.map(multiplier)
// console.log(marksdouble)

// let listoffreiends = ["fartun", "hani", "ali"];
// let marks = [20, 30, 40, 9, 51, 33, 66];
// let marksdouble = marks.map( (x) => x * 2);
// console.log(marksdouble);

// let listoffreiends = ["fartun", "hani", "ali"];
// let marks = [20, 30, 40, 9, 51, 33, 66];
// let marksdouble = marks.map( x => x * 2);
// console.log(marksdouble);
// let totalmarks = marks.reduce((total, num) => total + num);
// console.log(totalmarks)

let listoffreiends = ["fartun", "hani", "ali", "farhaan"];
let namesStartingwithf = listoffreiends.filter((Item, Index) => Item.startsWith("f"))
console.log(namesStartingwithf)
// function checknumber(Num) {
//     return new Promise((resolve, reject) => {
//         if (num > 10) {
//             resolve("Number is greater than 10");

//         } else {
//             reject("Number is 10 or less");
//         }
//     });
// }
// checknumber(15)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//         })
//customer place an order at the cashier


// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject("Cannot divide by zero");
//         } else {
//             resolve(a / b);
//         }
//     });
// }

// divide(10, 2)
//     .then((result) => {
//         console.log("Result:", result);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });


function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;

        setTimeout(() => {
            if (success) {
                resolve("Data loaded successfully!");
            } else {
                reject("Error loading data.");
            }
        }, 2000);
    });
}

fetchData()
    .then((result) => {
        console.log(result); // Runs if resolved
    })
    .catch((error) => {
        console.error(error); // Runs if rejected
    });
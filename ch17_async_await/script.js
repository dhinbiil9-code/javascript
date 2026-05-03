// function fetchData() {
//     return new Promise((resolve, reject) => {
//         let success = true;

//         setTimeout(() => {
//             if (success) {
//                 resolve("Data loaded successfully!");
//             } else {
//                 reject("Error loading data.");
//             }
//         }, 2000);
//     });
// }

// async function getData() {
//     try {
//         const result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData();


function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve(a / b);
        }
    });
}

async function runDivision() {
    try {
        const result = await divide(10, 2);
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

runDivision();
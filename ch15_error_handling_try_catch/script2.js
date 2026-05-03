let dividebyzeroerror = new error("you tried to divide a number by zero")
try
{
    let numberOfkids = 20
    let numberOfBooks = 0
    let sum = numberOfkids/numberOfBooks
    // console.log(sum)
    // throw devidebyzero error;

} catch (console) {
    console.log("You have an error", error.message);
} finally {
    console.log("regadless of an error or not my code will run")
    }

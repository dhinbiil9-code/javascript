import { generategreating } from "./greating.js";

const input = document.getElementById("nameimput");
const button = document.getElementById("greatbtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    const name = input.Value;
    const massege = generategreating(name);
    result.textContent = massege;

});
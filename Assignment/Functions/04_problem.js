// * Write a function to check if the value is number or string.
import readlineSync from "readline-sync";
function val (value) {
 value = readlineSync.question("Enter your input: ")
if (value >= "A" && value <= "Z" || value>="a" && value<="z") {
    console.log("It is a string");
} else {
    console.log("It is a number");
}
}
val();
//---------------------------------------------------------------------------------->
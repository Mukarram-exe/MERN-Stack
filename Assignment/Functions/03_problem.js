
// * Write a function that checks if the value is capital or small letter
import readlineSync from "readline-sync";
let char = function (charecterl) {
   charecterl = readlineSync.question("Enter your charecter: ")
    if (charecterl >= "A" && charecterl <= "Z"){
console.log("Charecter is a capital charecter");
   } else {
    console.log("Charecter is a small charecter");
   } }
   char();
   //----------------------------------------------------------------------->
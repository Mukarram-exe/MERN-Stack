// Write a Javascript program to input any character and check whether it is alphabet, digit or special character.
console.log("9.Write a Javascript program to input any character and check whether it is alphabet, digit or special character.");
var readlinesync = require("readline-sync")
var alpha1 = readlinesync.question("Enter:");
let positveinfinity = Infinity;
let negativeinfinity = -Infinity;
positveinfinity + 1 // Infinity
negativeinfinity - 1 // -Infinty
if (alpha1>negativeinfinity && alpha1<positveinfinity) {
    console.log("It is a number");
} else if (alpha1 >='a'&& alpha1<='z' || alpha1>='A'&& alpha1<='Z') {
    console.log("It is an alphabet");
} 
else {
    console.log("It is a special charecter");
}
//-------------------------------------------------------------------------->
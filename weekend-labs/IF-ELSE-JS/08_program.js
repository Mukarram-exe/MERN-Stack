// Write a Javascript program to check whether a character is uppercase or lowercase alphabet.
console.log("10.Write a Javascript program to check whether a character is uppercase or lowercase alphabet.");
var readlinesync = require("readline-sync")
var key = readlinesync.question("Enter your alphabet: ");
if (key >="a" && key<= "z") {
    console.log("It is a lowercase alphabet");
} else {
    console.log("it is a uppercase alphabet");
}
//-------------------------------------------------------------------------------->
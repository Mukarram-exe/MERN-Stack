// Write a Javascript program to input any alphabet and check whether it is vowel or consonant.
console.log("8. Write a Javascript program to input any alphabet and check whether it is vowel or consonant.");
var readlinesync = require("readline-sync")
var alpha = readlinesync.question("Enter your alphabet: ");
if ((alpha == "a")||(alpha == "e")||(alpha == "i")||(alpha == "O")||(alpha == "u")||(alpha == "A")||(alpha == "E")||(alpha == "I")||(alpha == "O")||(alpha == "U")){
    console.log("It is a vowel");
}
else{
    console.log("It is a consonant");
}
//------------------------------------------------------------------------>
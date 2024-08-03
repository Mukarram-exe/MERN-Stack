// Write a Javascript program to count total number of notes in given amount.
console.log("13.Write a Javascript program to count total number of notes in given amount.");
var readlinesync = require("readline-sync")
var amount = readlinesync.questionInt("Enter the total amount: ")
var denomination = readlinesync.questionInt("Enter the denomination: ")
if (denomination == 10,20,50,100,200,500) {
    console.log("Notes = ", amount / denomination);
} else {
    console.log("Error");
}
//------------------------------------------------------------>
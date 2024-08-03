// Write a Javascript program to check whether a year is leap year or not.
console.log("6.Write a Javascript program to check whether a year is leap year or not.");
var readlinesync = require("readline-sync")
var year = readlinesync.questionInt("Enter the year: ");
if (year%4==0) {
    console.log(year,"is a leap year");
} else {
    console.log(year,"is not a leap year");
}
//-------------------------------------------------------------------------->
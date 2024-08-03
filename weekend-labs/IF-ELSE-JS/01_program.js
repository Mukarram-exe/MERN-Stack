// Write a Javascript program to input week number and print week day.
var readlinesync = require("readline-sync")
var weekNumber = readlinesync.questionInt("what is the day number: ")
switch (weekNumber) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
         console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("Day number not defined");
    break;
}
console.log("-----------------------------------------");
console.log("CAlCULATOR");
console.log("-----------------------------------------");
var readlinesync = require("readline-sync")
var opera1 = readlinesync.questionInt("Enter your 1st number: ");
var operator = readlinesync.question("Enter your operation: ")
var opera2 = readlinesync.questionInt("Enter your 2nd number: ")
switch (operator) {
    case "+" :
        console.log(opera1+opera2);
        break;
    case "-" :
        console.log(opera1-opera2);
        break;
    case "*":
        console.log(opera1*opera2);
        break;
    case "/":
    console.log(opera1/opera2);
    break;

    default:
        console.log("At the moment not defined");
        break;
}
//---------------------------------------------------------------------------------------->
/*
QUESTION : 
* You are given a variable marks. Your task is to print:
- AA if marks is greater than 90
- AB if marks is greater than 80  and less than or equal to 90
- BB if marks is greater than 70 and less than or equal to 80
- BC if marks is greater than 60 and less than or equal to 70
- CC if marks is greater than 50 and less than or equal to 60
- DD if marks is greater than 30 and less than or equal to 40
- FF if marks is less than or equal to 30
*/
//----------------------------------------------------------------------------------------->

let marks = 30

if (marks > 90) {
    console.log("AA");
} else if (marks > 80 && marks <= 90) {
    console.log("AB");
} else if (marks > 70 && marks <= 80) {
    console.log("BB");
} else if (marks > 60 && marks <= 70) {
    console.log("BC");
} else if (marks > 50 && marks <= 60) {
    console.log("CC");
} else if (marks > 30 && marks <= 40) {
    console.log("DD");
} else if (marks <= 30) {
    console.log("FF");
} else {
    console.log("Good luck for your future 👍");
}
//---------------------------------------------------------------------->
// UPDATED:

let numbers = 80;

if (numbers > 90) {
    console.log("AA");
} else if (numbers >= 80) {
    console.log("AB");
} else if (numbers >= 70 ) {
    console.log("BB");
} else if (numbers >= 60 ) {
    console.log("BC");
} else if (numbers >= 50 ) {
    console.log("CC");
} else if (numbers >= 30 ) {
    console.log("DD");
} else if (numbers <= 30) {
    console.log("FF");
} else {
    console.log("Good luck for your future 👍");
}
//--------------------------------------------------------------------->
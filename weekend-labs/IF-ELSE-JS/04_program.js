// Write a Javascript program to input all sides of a triangle and check whether triangle is valid or not.
console.log("15.Write a Javascript program to input all sides of a triangle and check whether triangle is valid or not.");
var readlinesync = require("readline-sync")
let side1 = readlinesync.questionInt("Enter 1st side: ")
let side2 = readlinesync.questionInt("Enter 2nd side: ")
let side3 = readlinesync.questionInt("Enter 3rd side: ")
let validTrinagle = (side1+side2>side3 && side1+side3>side2 && side2+side3>side1)
if (side1 && side2 && side3 <=0 ) {
    console.log("Please enter valid sides");
} else if(validTrinagle){
    console.log("This is a valid triangle");
}else{
    console.log("This is not a valid triangle");
}
//----------------------------------------------------------------------->
// Write a Javascript program to input angles of a triangle and check whether triangle is valid or not.
console.log("14.Write a Javascript program to input angles of a triangle and check whether triangle is valid or not.");
var readlinesync = require("readline-sync")
var angle1 = readlinesync.questionInt("Enter 1st angle: ")
var angle2 = readlinesync.questionInt("Enter 2nd angle: ")
var angle3 = readlinesync.questionInt("Enter 3rd angle: ")
if (angle1 && angle2 && angle3 >0 && (angle1 + angle2 + angle3) === 180 ) {
    console.log("This is a valid triangle");
} else {
    console.log("This is not a valid triangle");
}
//--------------------------------------------------------------->
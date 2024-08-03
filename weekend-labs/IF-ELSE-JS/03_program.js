// Write a Javascript program to check whether the triangle is equilateral, isosceles or scalene triangle.
console.log("16.Write a Javascript program to check whether the triangle is equilateral, isosceles or scalene triangle.");
var readlinesync = require("readline-sync")
let tri1 = readlinesync.questionInt("Enter 1st side: ")
let tri2 = readlinesync.questionInt("Enter 2nd side: ")
let tri3 = readlinesync.questionInt("Enter 3rd side: ")
let equilateral = (tri1==tri2==tri3);
let isosceles = ((tri1==tri2) || (tri2==tri3) || (tri3==tri1)) 
let scalene = (tri1!==tri2!==tri3)
if (equilateral) {
    console.log("It is a equilateral triangle");
} else if (isosceles) {
    console.log("It is a isosceles triangle");
} else if(scalene) {
    console.log("It is a scalene trinagle");
} else{
    console.log("This not a valid triangle");
}
//------------------------------------------------------------------------>
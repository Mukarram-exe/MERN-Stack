//--------------------------------------------------------------------------------->
// Write a function to calculate the area of a rectangle.
import readlinesync from "readline-sync";
let areaOfRectangle = function (a ,b) {
    a = readlinesync.questionInt("Enter length:");
    b = readlinesync.questionInt("Enter breadth: ");
    return  a*b
    
}
console.log("area of rectangle:",areaOfRectangle());

 //------------------------------------------------------------------------------>
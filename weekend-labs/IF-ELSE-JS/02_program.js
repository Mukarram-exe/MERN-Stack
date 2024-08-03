// Write a Javascript program to calculate profit or loss.
console.log("17.Write a Javascript program to calculate profit or loss.");
var readlinesync = require("readline-sync")
let sellingPrice = readlinesync.questionInt("Enter selling price: ")
let costPrice = readlinesync.questionInt("Enter cost price: ")
let loss = costPrice-sellingPrice
let profit = sellingPrice-costPrice
if (sellingPrice>costPrice) {
    console.log("Your profit is: ", profit);
} else {
   console.log("Your loss is: ", loss); 
}
//---------------------------------------------------------------------->
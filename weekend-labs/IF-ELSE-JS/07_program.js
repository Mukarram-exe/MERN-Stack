// Write a Javascript program to input month number and print number of days in that month.
console.log("11.Write a Javascript program to input month number and print number of days in that month.");
var readlinesync = require("readline-sync");
var month = readlinesync.questionInt("Enter the month number: ");
let January = 1
let February = 2
let March = 3
let April = 4
let may = 5
let June = 6
let July = 7
let August = 8
let September = 9
let October = 10
let November = 11
let December = 12

if (month == 1 ) {
    console.log("Your month is January with 31 days");
} else if(month == 2 ){
    console.log(" Your month is feburary with 28 and sometimes 29 days");
}else if(month == 3){
    console.log("Your month is March with 31 days");
}else if(month == 4){
    console.log("Your month is April with 30 days");
}else if(month == 5){
    console.log("Your month is May with 31 days");
}else if(month == 6){
    console.log("Your month is June with 30 days");
}else if(month == 7){
    console.log("Your month is July with 31 days");
}else if(month == 8){
    console.log("Your month is August with 31 days");
}else if(month == 9){
    console.log("Your month is September with 30 days");
}else if(month == 10){
    console.log("Your month is October with 31 days");
}else if(month == 11){
    console.log("Your month is November with 30 days");
}else if(month == 12){
    console.log("Your month is December with 31 days");
}
else{
    console.log("No such month exist");
}
//---------------------------------------------------------------------------->
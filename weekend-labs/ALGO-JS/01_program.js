// Write an Algorithm to subtract two integers without using "minus(-)" operator.
// ---------------------------------------------------------------->
// THE ALGORITHM :
/**
 * PRINT TWO NUMBERS
 * LET FIRST NUMBER BE num1 AND OTHER NUMBER BE num2.
 * LOGIC : NEGATION OPERATOR (~) ACTS ALMOST THE SAME AS (-) OPERATOR, WE JUST NEED TO ADD { 1 }
 * SO THE LOGIC SYNTAX GOES SOMETHING LIKE [ num1 + ~num2+1 ]
 */
// ----------------------------------------------------------->
// HARD-CODED----->
// let num1 = 10000
// let num2 = 500
// let subtraction = num1 + ~num2+1
// console.log(subtraction);
//------------------------------------------------------------>
function subtraction(num1, num2) {
  return num1 + ~num2 + 1;
}
console.log(subtraction(67, 5));

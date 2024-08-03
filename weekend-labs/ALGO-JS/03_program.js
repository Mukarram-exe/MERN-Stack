// Split the array and add the first part to the end. There is a given array 
// and split it from a specified position, and move the first part of array add to the end.


// Input 1: [12, 10, 5, 6, 52, 36], index position to split = 2
// Output : [ 5, 6, 52, 36, 12, 10 ]

// Input 2: [12, 10, 5, 6, 52, 36], index position to split = 3
// Output : [ 6, 52, 36, 12, 10, 5 ]

// ------------------------------------------------------------------->


let input1 = [12, 10, 5, 6, 52, 36]
console.log(`OUTPUT1 : INITIAL ARRAY : [12, 10, 5, 6, 52, 36]`, );
let firstPart = input1.slice(0,2)
let secondPart = input1.slice(2)
let result = secondPart.concat(firstPart)
console.log(`FINAL ARRAY `,result);

//------------------------------------------------------------------>
console.log(`---------------------------------------------------`);
let input2 = [12, 10, 5, 6, 52, 36]
console.log(`OUTPUT2 : INITIAL ARRAY = [12, 10, 5, 6, 52, 36] `);
let partOne = input2.slice(0,3)
let partTwo = input2.slice(3)
let RESULT = partTwo.concat(partOne);
console.log(`FINAL ARRAY`,RESULT);

//------------------------------------------------------------------------->


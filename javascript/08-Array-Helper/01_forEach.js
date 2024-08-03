//--------------------------------------------------------------------------------------->
const arr = [12, 6, 7, 8 , 95, 101, 45, 34, 5, 6, 7, 8, 923, 2323, 94];
const result = [];

//  Iterate through the array and give me all the elements.
// ------------Imprative approach------------------------->
// for (let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

//-----------Declarative Approach------------------------> 
// 1. it is also possible in a single line.

arr.forEach((ele)=> console.log(ele * 2)); // This new javascript syntax is supported in ES6 AND ES6+.

//--------------------------------------------------------------------------------------->


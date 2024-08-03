//----------------------------------------------------------------->
const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67,9,23,2,5,67];
// only a single digit. Push it into a new array and return.
// function isDigit(arr) {
//     let singleDigit = []
//     for(let i = 0 ; i < arr.length ; i ++){
//         if (arr[i] < 10) {
//             singleDigit.push(arr[i]);
//         }
//     }
//     return console.log(singleDigit);
// }
// isDigit(arr)

//-------------------------------------------------------------------------->
//----------------OPTIMISED WAY----------------------------------------->

const newArr = arr.filter((ele)=> ele < 10);
console.log(newArr);
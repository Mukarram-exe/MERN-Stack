//--------------------------------------------------------------------------->
const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67];
// check if the array has even numbers and return a new array with array of even numbers.
function isEven(arr) {
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return console.log(even), console.log(odd);
}
isEven(arr);

//----------------------------------------------------------------------------->

const result = arr.map((ele)=>{
    if (ele % 2 == 0 ) return ele;
})
console.log(result);

//----------------------------------------------------------------------->

const evenNumbers = arr.filter((ele)=> (ele % 2 == 0))
console.log(evenNumbers);

//-------------------------------------------------------------->
//----------------------NOTE--------------------------------------->
// .forEach() iterates through each and every element of the array .
// .map() is used to to return the result in a new array or in a new datbase.
// .filter() acts as if statement.



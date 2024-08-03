//------------------------------------------------------->
const data = [
  { a: 1, b: 2 },
  { aa: 11, bb: 12 },
  { aaa: 111, bbb: 222 },
];

let sum = 0;
let objvalues = data.map((ele) => Object.values(ele));
// console.log(objvalues);
objvalues = objvalues.flat();
objvalues.forEach((element) => (sum += element));
console.log(sum);
//---------------------------------------------------->


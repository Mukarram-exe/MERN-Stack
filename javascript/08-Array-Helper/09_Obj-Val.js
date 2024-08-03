//-------------------------------------------------------->
const data = [
  { a: 1, b: 2 },
  { aa: 11, bb: 12 },
  { aaa: 111, bbb: 222 },
];
let sum = 0;
let total = 0;
data.forEach((ele)=>{
    // console.log(ele);
    // console.log(Object.values(ele));
    let arr = Object.values(ele);
    // console.log(arr);
    arr.forEach((e)=>{
        sum += e;
    })
});
console.log(sum);
//-------NOTE------------------------
/**
 * THIS METHOD IS USED IN JAVASCRIPT ES6 - 2015/2016
 */
//------------------------------------------------------------->


// Write an algorithm that returns number array, string array, emoticons array.
//------------------------------------------------------------------------>
const data = [21, 11, "asma", "😘", 45, "🤖", 99, "🤡", "😅", 88, "👩🏻‍🦰"];
function isString(value) {
  return typeof value == "string";
}
// function isNumber(val) {
//     return typeof val === 100
// }
function sorting() {
  let str = [];
  let num = [];
  for (let i = 0; i < data.length; i++) {
    if (isString(data[i])) {
      str.push(data[i]);
    } else {
      num.push(data[i]);
    }
  }
  return{
    str,num
  }
}
console.log(sorting(data));

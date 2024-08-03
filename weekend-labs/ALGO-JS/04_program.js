// Write an algorithm to Split the Input String into two strings based on even and odd indexes.
// Left padd '000' string and right pad with '111' string.
// Input 1 :
// code.in
//Input 2 :
// Hello there
//----------------------------------------------->
function splitString(str) {
  let evenIndex = "";
  let oddIndex = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenIndex += str[i];
    } else {
      oddIndex += str[i];
    }
  }
  evenIndex = `000` + evenIndex.concat(`111`);
  oddIndex = `000` + oddIndex.concat(`111`);

  return {
    evenIndex,oddIndex
  };
}
let val1 = `code.in`;
let val2 = `Hello there`
console.log(splitString(val1));
console.log(splitString(val2));


//----------------------------------------------------->

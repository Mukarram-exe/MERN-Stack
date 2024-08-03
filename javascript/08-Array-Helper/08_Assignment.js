//-------------------------------------------------->
// Sum up all the numbers in an array.
const data = [{a:1, b:2},{aa:11,bb:12},{aaa:111,bbb:222}];
let sum = 0;
for (let i = 0 ; i <data.length ; i++){
    // console.log(data[i]);
    let obj = data[i];
    let values = Object.values(obj); // OBJECT.VALUES HELPS TO ACCESS IN THE OBJECTS IN AN ARRAY.
    for (let j = 0; j < values.length; j++){
        sum +=values[j];
    }
}
console.log(sum);
//-------------------------------------------------->

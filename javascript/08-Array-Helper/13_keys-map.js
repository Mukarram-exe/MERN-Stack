//--------------------------------------------------------------->
const data = [{a:1, b:2},{aa:11,bb:12},{aaa:111,bbb:222}];
let sum = 0;
let output = data.map((obj)=>{
    // console.log(obj);
    for (let keys in obj){
        sum += obj[keys]
    }
    return sum;
})
console.log(output);
//--------------------------------------------------------->


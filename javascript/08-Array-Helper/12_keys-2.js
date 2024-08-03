//--------------------------------------------------------->
const data = [{a:1, b:2},{aa:11,bb:12},{aaa:111,bbb:222}];
let sum = 0;
data.forEach((ele)=>{
    // console.log(ele);
    for (let keys in ele){
        // console.log(ele[keys]);
        sum += ele[keys];
    }
});
console.log(sum);
// THIS IS ANOTHER WAY TO SUM ALL THE VALUES IN A ARRAY.
//------------------------------------------------------->

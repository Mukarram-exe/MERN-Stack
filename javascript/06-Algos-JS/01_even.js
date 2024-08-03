//------------------------------------------------------->
function evenSeries(start,end) {
    let count = 0
    let temp = '';
    for(let i = start/2;i<=end/2;i++){
        temp += (2*i) + '\t';
        count++
    }
    console.log(temp);
    console.log(`The number of even number from 1-100`, count);
}
evenSeries(1500,3000)
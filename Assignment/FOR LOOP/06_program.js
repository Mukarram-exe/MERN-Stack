//  Write a JS code to print Even numbers in given array.
 
let arr1 = [12,14,15,16,13,19,21,43];
let temp = []
for (let i = 0; i<=arr1.length;i++){
    if (arr1[i]%2==0) {
        temp.push(arr1[i])
    }
}
console.log(temp);
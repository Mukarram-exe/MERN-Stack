const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67];
let arr2 = []
function singleDigit() {
    for (let i = 1; i<=arr.length; i++){
        if (arr[i]<10) {
            arr2.push(arr[i])
        }
    }
    return ((arr2.push(i)))
}
singleDigit();
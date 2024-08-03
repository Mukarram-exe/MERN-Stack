//Two variables with same elements or key:value are not equal.
//Example:
var obj1 = {a: 1,b:2};
var obj2 = {a: 1,b:2};

var arr1 = [1,2,3];
var arr2 = [1,2,3];

console.log(obj1 == obj2);
console.log(arr1 == arr2);
console.log(arr1 == arr1);
// There are some ways you can check multiple things about an array using some basic .cmds
// For example :
let data = [10,20,null,false,"Assalmualikum"];
console.log("Initial length of the array: ",data.length);
// basically (.length) cmd gives the lenthg of and array.How many elemts does an array have.
console.log("Initial array: ");
console.log(data);// Initial array length.
console.log("--------------------------------------------------------------"); 
// We can add an element in the end of an array using .push() cmd.
console.log("Updated array: ");
data.push("Ra.one","G.one",);
console.log(data);
console.log("Updated length of the array: ",data.length);
// We can add an element in the beginning of an array using .unshift cmd.
console.log("------------------------------------------------------------------");
data.unshift("Neil Bhor");
console.log("Updated array: ");
console.log(data);
console.log("Updated length of the array: ",data.length);
// We can delete an element from the end of an array by using .pop() cmd.
console.log("------------------------------------------------------------------");
data.pop();
console.log("Removed and element(G.one) using .pop cmd : ",);
console.log(data);
console.log("Updated length of the array: ",data.length);
// We can also delete an element from the beginning of an array using the .shift() cmd.
console.log('---------------------------------------------------------------------');
data.shift()
data.shift()
console.log("Updated data after .unshift: ");
console.log(data);
console.log("Updated length of the array: ",data.length);

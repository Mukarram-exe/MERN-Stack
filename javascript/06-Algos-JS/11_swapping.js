// USING THE BITWISE XOR(^) AND NEGATION(~) TRY TO SWAP
function swap(num1,num2) {
  
    console.log(`Beforswapping : `, num1,num2);
    // console.log(num1 = ~num1 ^ num2);
    // console.log(num2 = num2 ^ ~num1);   THIS IS ALSO CORRECT.
    // console.log(num1 = ~num1 ^ num2);
        console.log(num1 = ~(num2^num1));
        console.log(num2 = ~(num2^num1));
        console.log(num1 = ~(num1^num2));
    console.log(`Afterswapping :`,num1,num2);
}
swap(15,16)
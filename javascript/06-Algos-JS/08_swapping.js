//--------------------->
function swap(num1,num2) {
  
    num1 = num1 +num2;
    num2 = num1 - num2;
    num1 = num1-num2
    console.log(`Afterswapping :`,num1,num2);
}
swap(15,16)
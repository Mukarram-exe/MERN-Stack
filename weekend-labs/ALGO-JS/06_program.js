// Write an algorithm that prints the Fibonacci series. Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, ... P.S. Read about the Fibonacci series and the mathematician.
//----------------------------------------------------------->
// ALGORITHM :
/**
 * DECLARE AN ARRRAY OF TWO INDEX "[0,1]"
 * CREATE A FUNCTION FOR FIBONACCI AND CREATE A FOR LOOP.
 * LET THE INITIALISATION BE 2 
 * LET THE CONDITION BE "<15"
 * LET THERE BE INCREMENT
 * DECLARE A TEMP INSIDE THE FOR LOOP WHICH IS EQUAL TO "arr[i - 2] + arr[i - 1]"
 * NOW PUSH THE TEMP INTO THE ARRAY "(arr)"
 * THEN CONSOL.LOG THE ARRAY.
 */
//---------------------------------------------------------------------->

// let arr = [0, 1];
// function Fibonacci(arr) {
//   for (let i = 2; i < 15; i++) {
//     let temp = arr[i - 2] + arr[i - 1];
//     arr.push(temp);
//   }
//   console.log(arr);
// }

//---------------------------------------------------------------------------->
//------------DIFFERENT APPROACH--------------------------------------------------->
function FIBONACCI(input) {
    
    let  prev = 0 ,curr = 1 , sum = 0;
    for (let i = 0; i <=input ; i++){
        if (prev>=input) break;
        console.log(prev);                      // NEAREST VALUE TO THE FIBONACCI.
        sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    
} 
FIBONACCI(50)
    

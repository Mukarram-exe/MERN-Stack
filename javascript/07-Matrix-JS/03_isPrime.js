// Write a function to find the prime numbers in the 4x4 matrix:

// Input: [[1,2,3,4],[5,6,8,9],[8,9,5,5,],[5,7,5,5]]
// Output: [2,3,5,5,7,5,5,5];

// Input: [[5,4,6,1],[5,0,5,3],[2,5,8,9],[0,2,3,5]]
// Output: [5,1,5,5,3,2,5,2,3,5]

import matrixCreation from "./01_matrix_input.js";
import  {printMatrix}  from "./02-Matrix-Addition.js";

function main () {
    const matrix = matrixCreation();
    const primes = [];
   printMatrix(matrix, 'IS Prime or Not');
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0 ; j < matrix[0].length ;j++){
            if (isPrime(matrix[i][j])){
                primes.push(matrix[i][j]);
            }
        }
    }
    console.log(primes);
}

function isPrime(num){
    if (num == 1) return false;
    let factors = 0;
    for(let i = 2; i<num;i++){
        if (num % i == 0){
            factors++;
            break;
            
        }
    }
    return factors == 0 ? true : false;
}

main();


import  matrixCreation  from "./01_matrix_input.js";
const main = () =>{
    const matrix = matrixCreation();
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    
    if (matrix.length == matrix[0].length){
        for (let i = 0, j = matrix.length - 1; i<matrix.length, j >= 0 ; i++, j--){
            leftDiagonal += matrix[i][i]
            rightDiagonal += matrix[i][j]
           
        }
       
        
    }
    
    let difference = leftDiagonal - rightDiagonal;
    console.log(Math.abs(difference));

}

main();
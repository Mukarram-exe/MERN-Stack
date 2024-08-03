import matrixCreation from "./01_matrix_input.js";
import colors from 'colors-cli';

const printMatrix = (matrix,nameofMatrix) => {
    console.log(colors.cyan(`Matrix ${nameofMatrix}:`));
         for(let i = 0; i<matrix.length;i++){
             let str = '';
            for(let j = 0; j<matrix[i].length; j++){
                str += matrix[i][j] + ' ';
            }
            console.log(str);
        }
}
function matrixAdditon(){
    const matrixA = matrixCreation();
    const matrixB = matrixCreation();
    console.log('Matrix A: ',colors.green(matrixA));
    console.log('Matrix B: ',colors.green(matrixB));

    console.log('matrix A length: ',matrixA.length);
    console.log('matrixA[0] length: ', matrixA[0].length);
         // Matrix A:
    printMatrix(matrixA,"A");

        //Matrix B
        printMatrix(matrixB,'B');

 
    if(matrixA.length == matrixB.length && matrixA[0].length == matrixB[0].length){
        const sum = new Array(matrixA.length);
        for (let i = 0; i < sum.length;i++){
            sum[i] = new Array(matrixA[0].length);
         }

         for(let i = 0; i<sum.length;i++){
            for(let j = 0; j<sum[i].length; j++){
                sum[i][j] = matrixA[i][j] + matrixB[i][j];
            }
         }
        
       
         printMatrix(sum,'Sum');
       
        

    } else {
        console.log('Matrices cannot be added....');
    }
}

// matrixAdditon();

export {printMatrix, matrixAdditon}

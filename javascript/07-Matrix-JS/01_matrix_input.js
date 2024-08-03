import readlineSync from "readline-sync";

function matrixCreation() {
  const row = readlineSync.questionInt(`Enter the Number of Rows :`);
  const col = readlineSync.questionInt(`Enter the Number of Columns :`);
  console.log(`The Dimension of the Matrix is ${row} X ${col}`);

  const matrix = new Array(row);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(col);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = readlineSync.questionInt(
        `Enter the values in Matrix A Row ${i + 1} and Column ${j + 1} : `
      );
    }
  }
  
  console.log(matrix);
  return matrix;
}


// matrixCreation();
export default matrixCreation;

//dynamic programming
//linear algebra
// import readlineSync from "readline-sync";

// function matrixInput() {
//   const rows = readlineSync.questionInt("Enter no of rows: ");
//   const cols = readlineSync.questionInt("Enter no of cols: ");
//   console.log(`The Order of the matrix is ${rows} x ${cols}`);

//  const matrix = new Array(rows);//empty rows added in a matrix. console log and check.Next step is to add empty cols.
//  for(let i=0;i<matrix.length;i++){
//     matrix[i] = new Array(cols);//empty cols added in the same matrix. console log and check. Next step is to add value to this matrix.
//  }
//  for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         matrix[i][j]=readlineSync.questionInt(`Enter the value in ${i+1}th row and ${j+1}th coloum: `) // here we are adding the values to those empty rows and coloums.
//     }    
//  }
//  return matrix;
// // console.log(matrix); 
// }
// // matrixInput();
// export default matrixInput;
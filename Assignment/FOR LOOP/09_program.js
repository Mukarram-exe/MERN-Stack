// Multiply two Numbers without *


    // let product=0;
    // for (var i=1; i<=8; i++) {
    //     product=product+3;
    //     console.log(`3 X ${i} = ${product}`);
    // }
    function multiplyNums(left,right){
       let sum = 0;
       console.log('------------------------');
        while(left>=1){
            if(left % 2 ==0){
                console.log(left, right,'------------');
            } else {
            console.log(`${left} ${right}`)
            sum = sum + right;
            }
            left = Math.floor(left/2);
            right = right + right;
            // sum = sum + right;
            // console.log(left, right);
        }
       console.log('------------------------');
       console.log('Step 3 => \n Display Sum: ',sum);
    
        
    }
    
    multiplyNums(16,29);
    


// Write an algorithm to perform x^y operation without using ^ operator, use while
function exponent(base, exponent){
    let output = 1, counter = 0;
    while (counter < exponent){
        output = output * base;
        counter++
    }
    console.log(output);
}

exponent(2,0);
function isPrime(num){
    let factors = 0;
    for(let i = 2; i<num;i++){
        if (num % i == 0){
            factors++;
            break;
            // console.log(`The factor is ${i}`);
        }
    }
    return factors == 0 ? true : false;
}
console.log(isPrime(200));

const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67,9];


function filterPrimes(arr){
    const primes = [];
    for(let i = 0;i<arr.length;i++){
        if (isPrime(arr[i])){
           primes.push(arr[i]); 
        }
    }
    return primes;
    // console.log(primes);
}

console.log(filterPrimes(arr));


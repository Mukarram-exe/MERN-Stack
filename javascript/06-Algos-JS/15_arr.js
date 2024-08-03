function isPrime(num) {
    let factors = 0
    for (let i = 1; i<=num; i++){
        if (num%i==0) {
            factors++
            // console.log(i);
        }
    }
    factors == 2 ? console.log(`${num} is prime`) : console.log(`${num} is not prime`);
}
isPrime(100)




const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67,9,23,2,5,67];
function filterPrime(arr) {
    
       
        for (let i = 1; i<=arr.length; i++){
            if (isPrime(arr[i])) {
                f
            }
        }
        
    }
    filterPrime(arr)
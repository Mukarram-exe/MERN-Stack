function isPrime(num) {
    let factors = 0
    for (let i = 1; i<=num; i++){
        if (num%i==0) {
            factors++
            console.log(i);
        }
    }
    factors == 2 ? console.log(`${num} is prime`) : console.log(`${num} is not prime`);
}
isPrime(100)
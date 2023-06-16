// TODO: 
// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let primes = [];
    let result = 0;
    let checkPrimes = Array(num + 1).fill(true);
    checkPrimes[0] = checkPrimes[1] = false;

    for (let i = 2; i * i <= num; i++) {
        if (checkPrimes[i]) {
            for (let j = i * i; j <= num; j += i) {
                checkPrimes[j] = false;
            }
        }
    }

    for (let i = 0; i <= num; i++) {
        if (checkPrimes[i]) {
            primes.push(i);
        }
    }

    const sum = primes.map(prime => result += prime);
    return result;
}

sumPrimes(977);


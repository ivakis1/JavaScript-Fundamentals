function primeCheck(number) {
    let isPrime = true;

    for (let i = 2; i < Math.sqrt(Number(number)); i++) {
        if(Number(number) % i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime && number > 1;
}

console.log(primeCheck(10));
function triangleOfStars(n){

    for (let i = 1; i <= n; i++) {
        printLine(i);
    }

    for (let i = n - 1; i >= 1; i--) {
       printLine(i);
    }

    function printLine(count) {
        console.log("*".repeat(count));
    }
}

triangleOfStars(3);
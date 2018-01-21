function printSquare(n = 5){

    for (let i = 1; i <= n; i++) {
        printStars(n);
    }

    function printStars(count) {
          console.log("*" + " *".repeat(count - 1))
    }
}

printSquare();
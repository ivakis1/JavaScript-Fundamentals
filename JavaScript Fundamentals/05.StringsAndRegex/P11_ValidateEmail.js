function solve(email) {
    console.log(/^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/i.test(email) ? "Valid" : "Invalid");
}

solve('valid@email.bg');
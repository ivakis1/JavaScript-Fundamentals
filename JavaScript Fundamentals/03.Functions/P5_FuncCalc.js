function calc(num1, num2, op) {

    switch (op){
        case "+": return add(num1, num2);
        case "-": return substract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return devide(num1, num2);
    }

    function add(a, b){
        return a + b;
    }
    function substract(a, b){
        return a - b;
    }
    function multiply(a, b){
        return a * b;
    }
    function devide(a, b){
        return a / b;
    }
}

console.log(calc(5, 6, "+"));
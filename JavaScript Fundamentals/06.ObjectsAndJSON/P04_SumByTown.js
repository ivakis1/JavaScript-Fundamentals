function solve(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let num = Number(input[i + 1]);

        if (!result.hasOwnProperty(town)) {
            result[town] = 0;
        }
        result[town] += num;
    }

    return JSON.stringify(result);
}

console.log(solve(
    ['Sofia',
        '20',
        'Varna',
        '3',
        'Sofia',
        '5',
        'Varna',
        '4']
));
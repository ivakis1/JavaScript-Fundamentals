function solve(arr) {
    let array = arr.join('').split("|").filter(e => e.length > 0);
    let result = [];
    array.filter((e, i) => i % 2 === 0).forEach(e => result.push(e.trim()));

    console.log(result.join(", "));
    console.log(array.filter((e, i) => i % 2 !== 0).reduce((a, b) => Number(a) + Number(b)));
}

solve(['| Sofia | 300', '| Veliko Tarnovo | 500', '| Yambol | 275']);
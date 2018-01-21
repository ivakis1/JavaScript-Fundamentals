function solve(arr) {
    let result = arr.filter((e, i) => i % 2 === 0);
    return result.join(" ");
}

console.log(solve([10, 20, 30, 40, 50]));
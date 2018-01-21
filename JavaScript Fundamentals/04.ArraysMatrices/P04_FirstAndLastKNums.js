function solve(arr) {

    let count = arr.shift();
    let first = arr.slice(0, count);
    let second = arr.slice( -count);

    console.log(first.join(" "));
    console.log(second.join(" "));
}

solve([2, 7, 8, 9]);
function solve(text) {
    let arr = text.split(' ');
    let result = [];

    let pat = /\w+/g;

    for (let word of arr) {
        let r = word.match(pat);
        if (r != null) {
            for (let obj of r) {
                result.push(obj);
            }
        }
    }

    return result.join("|");
}

console.log(solve('_(Underscores) are also word characters'));
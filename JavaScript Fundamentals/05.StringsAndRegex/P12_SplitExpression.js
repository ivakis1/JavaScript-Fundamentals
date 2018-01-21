function solve(text) {
    let arr = text.split(/[\s,.();]/i);

    for (let obj of arr.filter(e => e !== '')) {
        console.log(obj);
    }
}

solve('let sum = 4 * 4,b = "wow";');
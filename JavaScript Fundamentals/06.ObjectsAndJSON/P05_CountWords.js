function solve(input) {
    let text = input.join('\n');
    let textTokens = text.split(/\W+/g);

    let result = {};

    for (let obj of textTokens.filter(e => e !== '')) {
        if(!result.hasOwnProperty(obj)){
            result[obj] = 0;
        }
        result[obj]++;
    }
    return JSON.stringify(result);
}

console.log(solve(["Far too slow, you're far too slow."]));;
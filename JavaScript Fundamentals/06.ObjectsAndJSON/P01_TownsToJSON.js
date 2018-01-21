function solve(args) {
    args.shift();

    let result = [];

    for(let row of args){
        let townTokens = row.
            split('|').filter(e => e !== '').map(e => e.trim());

        let townObj = {Town: townTokens[0], Latitude: Number(townTokens[1]), Longitude: Number(townTokens[2])}

        result.push(townObj)

    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));;
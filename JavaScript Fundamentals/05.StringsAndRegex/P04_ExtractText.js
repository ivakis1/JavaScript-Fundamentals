function solve(text) {
    let result = [];

    let open = text.indexOf('(');


    while (open !== -1) {
        let close = text.indexOf(")", open);
        if(close === -1){
            break;
        }
        let snippet = text.substring(open + 1, close);
        result.push(snippet);

        open = text.indexOf("(", close);
    }

    return result.join(", ");
}

console.log(solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));
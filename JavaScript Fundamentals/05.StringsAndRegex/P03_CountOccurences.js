function solve(word, text) {
    let count = 0;

    let index = text.indexOf(word);

    while (index != -1){
        count++;
        index = text.indexOf(word, index + 1)
    }

    return count;
}

console.log(solve('the', 'The quick brown fox jumps over the lay dog.'));
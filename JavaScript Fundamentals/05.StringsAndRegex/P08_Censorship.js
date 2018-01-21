function solve(text, words) {

    for (let word of words) {
        let index = text.indexOf(word);

        while (index !== -1 ){
          text = text.replace(word, "-".repeat(word.length));

            index = text.indexOf(word);
        }
    }

    return text;
}

console.log(solve('roses are red, violets are blue', [', violets are', 'red']));
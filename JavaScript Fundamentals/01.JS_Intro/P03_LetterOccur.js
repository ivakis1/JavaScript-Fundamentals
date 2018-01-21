function calcLetterOccurs(word, letter) {
    let count = 0;

    for (let char of word) {
        if(letter === char){
            count++;
        }
    }
    return count;
}

console.log(calcLetterOccurs('hello', 'l'));
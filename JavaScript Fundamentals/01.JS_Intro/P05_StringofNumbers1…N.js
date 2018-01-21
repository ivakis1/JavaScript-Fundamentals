function print(limit) {
    let result = "";

    for (var i = 1; i <= limit; i++) {
        result += i;
    }
    return result;
}

console.log(print('11'));
function solve(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(`str[${i}] -> ${str[i]}`)
    }
}

(str) => str.split('').forEach((e,i) => console.log(`str[${i}] -> ${e}`));

solve("Hello softuni!");
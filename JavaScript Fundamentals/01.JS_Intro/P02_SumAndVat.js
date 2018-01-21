function result(arr) {
   let sum = 0;

    for (let obj of arr) {
        sum += Number(obj);
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${(sum * 0.2).toFixed(2)}`);
    console.log(`total = ${(sum * 1.2).toFixed(2)}`);
}

result([1.20, 2.60, 3.50]);
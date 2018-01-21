function solve(text) {
    let products = text.filter((e, i) => i % 2 === 0);
    let sum = text.filter((e, i) => i % 2 !== 0).map(Number);

    console.log(`You purchased ${products.join(", ")} for a total sum of ${sum.reduce((a, b) => a + b)}`)
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna','5.69']);
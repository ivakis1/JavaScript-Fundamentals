function calcArea(radius) {
    let area = Math.PI * Math.pow(Number(radius), 2);

    return `${area}\r\n${area.toFixed(2)}`;
}

console.log(calcArea(5));
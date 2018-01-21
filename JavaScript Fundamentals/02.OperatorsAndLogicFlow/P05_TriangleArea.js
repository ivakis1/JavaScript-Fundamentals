function calcArea(side1, side2, side3) {
    let semiperimeter = (side1 + side2 + side3) / 2;

    let area = Math.sqrt(semiperimeter * ((semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3)));

    return area;
}

console.log(calcArea(2, 3.5, 4));
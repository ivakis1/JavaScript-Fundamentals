function calcBoxes(bottlesCount, boxCapacity) {

    return Math.ceil(Number(bottlesCount) / Number(boxCapacity));
}

console.log(calcBoxes(15, 7));
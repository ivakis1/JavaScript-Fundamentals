function getTownPopulation(info) {
    let towns = new Map();

    for (let obj of info) {
        let [town, population] = obj.split(' <-> ');

        if(!towns.has(town)){
            towns.set(town, 0);
        }
        towns.set(town, towns.get(town) + Number(population));
    }

    print(towns);

    function print(map) {
        [...map].forEach(([town, pop]) => console.log(`${town} : ${pop}`))
    }
}

getTownPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
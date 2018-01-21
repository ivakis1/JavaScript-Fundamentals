function solve(info) {
    let map = new Map();
    for (let obj of info) {

        let [town, product, price] = obj.split(' | ');

        if (!map.has(town)) {
            map.set(town, new Map());
        }
        map.get(town).set(product, price);
    }
    let result = new Map();

    for (let [town, productInfo] of map) {
        for (let [product, price] of productInfo) {
            result.set(product, price);
            for (let [town1, productInfo1] of map) {
                for (let [product1, price1] of productInfo1) {
                    if (product === product1 && price1 < price) {
                        result.set(product1, price1)
                    }
                }
            }
        }
    }

    for (let [resultProduct, resultPrice] of result) {
        for (let [town, productInfo] of map) {
            for (let [product, price] of productInfo) {
                if (resultProduct === product && resultPrice === price) {
                    console.log(`${resultProduct} -> ${resultPrice} (${town})`)
                }
            }
        }
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
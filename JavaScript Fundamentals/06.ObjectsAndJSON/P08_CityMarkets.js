function getResult(info) {

    let map = new Map();

    for (let obj of info) {
        let [town, product, sales] = obj.split(' -> ');
        sales = sales.split(' : ').reduce((a, b) => a * b);

        if(!map.has(town)){
            map.set(town, new Map());
        }

        if(!map.get(town).has(product)){
            map.get(town).set(product, 0);
        }
        let s =  map.get(town).get(product);
        map.get(town).set(product, sales + s );
    }

    print(map);

    function print(result) {
        // for (let [key, values] of result) {
        //     console.log(`Town - ${key}`);
        //     for (let [product, sales] of values) {
        //         console.log(`$$$${product} : ${sales}`);
        //     }
        // }

        [...result].forEach(([town, products]) => {
            console.log(`Town - ${town}`);
            [...products].forEach(([product, sales]) => {
                console.log(`$$$${product} : ${sales}`);
            });
        })
    }
}

getResult([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']);
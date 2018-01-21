function getBiggestElement(matrice) {
    let result = Number.MIN_SAFE_INTEGER;

    for (let obj of matrice) {
        for (let obj1 of obj) {
            if(obj1 > result){
                result = obj1;
            }
        }
    }
    return result;
}

console.log(getBiggestElement([[20, 50, 10], [8, 33, 145]]));
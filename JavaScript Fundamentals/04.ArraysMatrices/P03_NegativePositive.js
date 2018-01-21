function solve(arr){
    let result = [];

    for (let obj of arr) {
        if(obj < 0){
            result.unshift(obj);
        }else{
            result.push(obj);
        }
    }

    return result.join(" ");
}

console.log(solve([7, -2, 8, 9]));
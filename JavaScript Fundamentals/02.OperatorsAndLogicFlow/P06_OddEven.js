function getType(number) {
    let rem = Number(number) % 2;

    if(rem === 0){
        return 'even';
    }else if(rem === Math.round(rem)){
        return 'odd';
    }
    return 'invalid';
}

console.log(getType(5));
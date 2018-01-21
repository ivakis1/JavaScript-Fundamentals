function getLeapOrNot(year) {

    if((Number(year) % 4 === 0 && Number(year) % 100 !== 0) || Number(year) % 400 === 0){
        return 'yes';
    }
    return 'no';
}

console.log(getLeapOrNot(2000));
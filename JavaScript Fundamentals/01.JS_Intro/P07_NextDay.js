function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let newData = new Date(date.getTime() + oneDay);

    return `${newData.getFullYear()}-${newData.getMonth() + 1}-${newData.getDate()}`
}

console.log(nextDay(2016, 9, 30));
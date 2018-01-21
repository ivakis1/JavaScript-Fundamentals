function filterByAge(minYears, name, age, name1, age1) {
    let firstPerson = {name : name , age : Number(age)};
    let secondPerson = {name: name1, age : Number(age1)};

    let arr = [firstPerson, secondPerson];

    arr.filter(x => x.age >= Number(minYears)).forEach(x => console.log(x));
}

filterByAge(12, 'Ivan', 15,'Asen', 9);
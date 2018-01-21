function solve(text) {

    let users = text.map(s => s.split('@'));
    let result = [];

    for (let user of users) {
        let [name, domain] = user;
        let domainTokens = domain.split('.');
        domainTokens =  domainTokens.map(e => e[0]);
        let username = name + '.' + domainTokens.join('');

        result.push(username);
    }

    return result.join(', ');
}

console.log(solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));;
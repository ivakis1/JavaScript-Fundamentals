function result(number) {
    console.log('<ul>');
    for (var i = 1; i <= Number(number); i++) {
        console.log(i % 2 !== 0 ?
            `<li><span style="color:green">${i}</span></li>` :
            `<li><span style="color:blue">${i}</span></li>`);
    }
    console.log('</ul>');
}

result(10);
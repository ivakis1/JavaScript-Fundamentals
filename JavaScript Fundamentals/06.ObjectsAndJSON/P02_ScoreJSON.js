function solve(text) {
    let objArgs = JSON.parse(text);

    let html = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';

    for (let obj of objArgs) {
        html += `   <tr><td>${htmlEscape(obj.name)}</td><td>${Number(obj.score)}</td></tr>\n`;
    }

    html += "</table>";

    return html;

    function htmlEscape(text) {

        let map = {'<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;', '&':'&amp;'};

        return text.replace(/[<>'&"]/g, ch => map[ch]);
    }
}

console.log(solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));
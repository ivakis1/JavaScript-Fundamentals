function solve(text) {
    let objArgs = JSON.parse(text);

    let html = '<table>\n   <tr>';

    for (let key of Object.keys(objArgs[0])) {
        html += `<th>${key}</th>`
    }
    html += "</tr>\n";

    for (let obj of objArgs) {
        html += `   <tr>`;

        for (let key of Object.keys(obj)) {
        html += `<td>${htmlEscape(obj[key])}</td>`
        }

        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = {'<':'&lt;', '>':'&gt;', '&': '&amp;', '"':'&quot;', "'" :'&#39;'};

        return text.toString().replace(/[<>'&"]/g, ch => map[ch]);
    }
}

solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');
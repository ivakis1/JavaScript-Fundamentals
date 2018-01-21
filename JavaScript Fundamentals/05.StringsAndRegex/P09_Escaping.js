function solve(text) {
    let result = text;

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].htmlEscape();
    }

    String.prototype.htmlEscape = function () {

        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    return result;
}


console.log(solve(['<b>unescaped text</b>', 'normal text']));

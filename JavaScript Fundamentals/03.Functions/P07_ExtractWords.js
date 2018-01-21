function strToUpperCase(str) {
    let arr = str.split(/\W+/);

   arr = arr.filter(x => x.length > 0).map(x => x.toUpperCase());

  return arr.join(", ");
}

console.log(strToUpperCase("Hi, how are you?"));
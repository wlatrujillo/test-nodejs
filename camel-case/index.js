module.exports = function toCamelCase(str){

    let words = str.split(/_|-/);

    let firstWord = words.shift();

    return firstWord + words.map(word => word[0].toUpperCase() + word.slice(1)).join('');
}

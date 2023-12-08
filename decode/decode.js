export function decode(message) {
    // Code here

    let filterAndRevert = message => message
        .split('')
        .filter(c => c != '(' && c != ')')
        .reverse()
        .join('');

    let regex = /\([^()]+\)/g;   
    let wordsToRevert = message.match(regex);
    let decodedMessage = message;

    for (let word of wordsToRevert) {
        decodedMessage = decodedMessage.replace(word, filterAndRevert(word));
    }

    if(regex.test(decodedMessage)){
        wordsToRevert = decodedMessage.match(regex)[0];
        decodedMessage = decodedMessage.replace(wordsToRevert, decode(wordsToRevert));
    } 

    return decodedMessage;

}
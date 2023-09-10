export function validParentheses(parens) {
    // your code here ..
    let stack = [];
    let array = parens.split('');

    for (let i = 0; i < array.length; i++) {
        if (array[i] == '(') {
            stack.push(array[i])
        } else if (stack.slice(-1) == '(' && array[i] == ')') {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length == 0 ? true : false;
}
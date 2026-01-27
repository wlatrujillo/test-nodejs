const validParentheses = (parens) => {
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

const validParentheses2 = (str) => {

    while (str.includes("()")) {
        str = str.replace("()", "");
    }

    return str.length == 0;
}

const validParentheses3 = (str) => {

    let open = 0, close = 0;

    for(const c of str){
        c == '(' ? open++ : close++ ;     
        if(close>open) return false;   
    }

    return open == close;

}


export { validParentheses, validParentheses2, validParentheses3 }
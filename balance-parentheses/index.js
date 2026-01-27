
const validate = (str) => {

    let open = 0, close = 0;

    for (const c of str) {
        if (c == '(') open++;
        else close++
    }

   return open == close;

}

export default validate;

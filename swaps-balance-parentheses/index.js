
const swaps = (str) => {

    let swaps = 0, open = 0, close = 0, balance = 0
    for (const s of str) {

        if (s == '(') {
            open++
            balance++
        }
        else {
            balance--
            close++
        }

        if (balance < 0) {
            swaps++;
            balance = 0
        }


    }

    if (open != close) return -1

    return swaps;


}

export default swaps;

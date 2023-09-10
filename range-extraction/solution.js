export function solution(list) {
    // TODO: complete solution 

    let result = [];
    let count = 0;

    for (let i = 0; i < list.length; i++) {

        count = 0;

        while (isSecuential(list[i + count], list[i + count + 1])) {
            count++;
        };

        if (count > 1) {
            result.push(list[i] + "-" + list[i + count]);
            i = i + count;
        }
        else
            result.push(list[i] + "");

    }

    function isSecuential(a, b) {
        return a + 1 == b;
    }


    return result.toString();
}
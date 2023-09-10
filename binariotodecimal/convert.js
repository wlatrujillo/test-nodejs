export default (binario) => {

    return binario
        .toString()
        .split('')
        .map(digit => Number(digit))
        .reverse()
        .map((num, index) => Math.pow(2, index) * num)
        .reduce((n, a) => n + a, 0);


}

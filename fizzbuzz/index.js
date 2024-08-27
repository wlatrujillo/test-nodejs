module.exports.fizzbuzz = function fizzbuzz(n) {

    if (typeof n !== 'number') {
        throw new Error('Input must be a number');
    }

    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    } 

    if (n % 3 === 0) {
        return 'Fizz';
    } 

    if (n % 5 === 0) {
        return 'Buzz';
    } 
   
    return n;
    
};

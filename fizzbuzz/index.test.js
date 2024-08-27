const {describe, it} = require('node:test');
const assert = require('node:assert');
const { fizzbuzz } = require('./index');

describe('Tests', () => {

    it('Should returns FizzBuzz', () => {
        assert.equal(fizzbuzz(15), 'FizzBuzz');
    });

    it('Should returns Fizz', () => {
        assert.equal(fizzbuzz(3), 'Fizz');
    });

    it('Should returns Buzz', () => {
        assert.equal(fizzbuzz(5), 'Buzz');
    });

    it('Should returns 1', () => {
        assert.equal(fizzbuzz(1), 1);
    });

    it('Should throws an exception', () => {

        assert.throws(() => {
            fizzbuzz('1');
        }, {
            name: 'Error',
            message: 'Input must be a number'
        });

    });

});


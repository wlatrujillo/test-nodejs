const { describe, it } = require('node:test');
const assert = require('node:assert');
const { recoverSecret } = require('./recover-secret');

describe('recoverSecret', () => {

    it('should recover the secret', () => {

        const secret1 = "whatisup";
        const triplets1 = [
          ['t','u','p'],
          ['w','h','i'],
          ['t','s','u'],
          ['a','t','s'],
          ['h','a','p'],
          ['t','i','s'],
          ['w','h','s']
        ];

        assert.equal(recoverSecret(triplets1), secret1);

    });

});

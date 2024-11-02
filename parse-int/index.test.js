const parseIntReloaded = require('./index');

const { describe, it } = require('node:test');
const assert = require('node:assert');

describe('parseIntReloaded', () => {

    it('should return 0', () => {
        assert.strictEqual(parseIntReloaded('zero'), 0);
    });
    
    it('should return 20', () => {
        assert.strictEqual(parseIntReloaded('twenty'), 20);
    });

    it('should return 246', () => {
        assert.strictEqual(parseIntReloaded('two hundred forty-six'), 246);
    });

    it('should return 1234', () => {
        assert.strictEqual(parseIntReloaded('one thousand two hundred and thirty four'), 1234);
    });

});

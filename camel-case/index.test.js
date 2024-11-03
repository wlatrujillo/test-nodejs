const { describe, it } = require('node:test');
const assert = require('node:assert');

const toCamelCase = require('./index');

describe('To Camel test', () => {

    it('should test', () => {
        assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
        assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
        assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
        assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
    });
}); 

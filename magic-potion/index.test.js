const magicFunction = require('./index');

const { it, describe } = require('node:test');

const assert = require('node:assert');


describe('magicFunction', () => {

    it('should return [2, 3]', () => {
        const potions = [4, 5, 6, 2]
        const goal = 8
        assert.deepEqual(magicFunction(potions, goal), [2, 3]);
    });

    it('should return undefined', () => {
        const potions = [1, 2, 3, 4]
        const goal = 9
        assert.deepEqual(magicFunction(potions, goal), undefined);
    });

    it('should return [1, 2]', () => {
        const potions = [1, 2, 3, 4]
        const goal = 5
        assert.deepEqual(magicFunction(potions, goal), [1, 2]);
    });

    it('should return [0, 2]', () => {
        const potions = [3,3,0]
        const goal = 3
        assert.deepEqual(magicFunction(potions, goal), [0, 2]);
    });


    it('should return undefined', () => {
        const potions = [3]
        const goal = 3
        assert.deepEqual(magicFunction(potions, goal), undefined);
    });


});

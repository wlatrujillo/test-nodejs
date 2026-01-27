import {describe, it } from 'node:test';
import assert from 'node:assert';

import swaps from './index.js';


describe('validate', () => {
  it('should count swaps need for balance parentheses', () => {
     assert.equal(swaps(')()()('), 1, 'should be 1');
     assert.equal(swaps('())'), -1, 'should be -1');
     assert.equal(swaps(')())(('), 2, 'should be 2');
  });  
});

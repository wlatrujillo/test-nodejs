import {describe, it } from 'node:test';
import assert from 'node:assert';

import validate from './index.js';


describe('validate', () => {
  it('should validate a correct parentheses balance', () => {
     assert.equal(validate('()())'), false, '()()) should be false');
     assert.equal(validate(')('), true, ')( should be true');
     assert.equal(validate(')()(())('), true, ')()(())( should be true');
  });  
});

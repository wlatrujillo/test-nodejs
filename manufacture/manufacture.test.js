import { describe, it } from "node:test";
import assert from "node:assert";
import { manufacture } from "./manufacture.js";

describe('Test Manufacture', () => {

  it('should pass test', () => {
    assert.deepEqual(manufacture(['tren', 'oso', 'pelota'], 'tronesa'), ['tren', 'oso']);
  });
  
  it('should pass test', () => {
    assert.deepEqual(manufacture(['juego', 'puzzle'], 'jlepuz'), ['puzzle']);
  });

  it('should pass test', () => {
    assert.deepEqual(manufacture(['libro', 'ps5'], 'psli'), []);
  });

});
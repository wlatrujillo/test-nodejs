
import { describe, it } from "node:test";
import assert, { throws } from "node:assert";


import { score } from "./index.js";


describe('Suite test cases', () => {
    it("should calculate score", () => {
        assert.equal(score([1, 5, 1, 2, 4]), 250, 'should be 250');

    });
    it("should calculate score", () => {
        assert.equal(score([3, 4, 5, 3, 3]), 350, 'should be 350');

    });
    it("should calculate score", () => {
        assert.equal(score([2, 3, 4, 6, 2]), 0, 'should be 0');

    });
    it("should calculate score", () => {
        assert.equal(score([1, 1, 1, 5, 1]), 1150, 'should be 1150');
    });
    it("should throw an exception when size is not allowed", () => {
        throws(() => score([1, 1, 1, 5, 1, 1]), Error);
    });
    it("should throw an exception values not allowed", () => {
        throws(() => score([1, -1, 1, 5, 1, 7]), Error);
    });
});
import { describe, it } from "node:test";
import assert from "node:assert";
import { findNaughtyStep } from "./solution.js";

describe("Tests", () => {
    it("Should pass tests", () => {
        const original = 'abcd'
        const modified = 'abcde'
        assert.equal(findNaughtyStep(original, modified), 'e')
    });

    it("Should pass tests", () => {
        const original = 'stepfor'
        const modified = 'stepor'
        assert.equal(findNaughtyStep(original, modified), 'f')
    });
    
    it("Should pass tests", () => {
        const original = 'abcde'
        const modified = 'abcde'
        assert.equal(findNaughtyStep(original, modified), '')
    });

    it("Should pass tests", () => {
        const original = 'xxxx'
        const modified = 'xxoxx'
        assert.equal(findNaughtyStep(original, modified), 'o')
    });
});
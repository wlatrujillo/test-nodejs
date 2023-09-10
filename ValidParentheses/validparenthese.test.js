import assert from "node:assert";
import { describe, it } from "node:test";
import { validParentheses } from "./validparentheses.js";

describe("Tests", () => {
    it(`values: "("`, () => assert.strictEqual(validParentheses("("), false));
    it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false));
    it(`values: ""`, () => assert.strictEqual(validParentheses(""), true));
    it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true));
    it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false));
});

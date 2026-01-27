import assert from "node:assert";
import { describe, it } from "node:test";
import { validParentheses3 } from "./validparentheses.js";



describe("Tests", () => {
    const validParentheses = validParentheses3
    it(`values: "("`, () => assert.strictEqual(validParentheses("("), false));
    it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false));
    it(`values: ""`, () => assert.strictEqual(validParentheses(""), true));
    it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true));
    it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false));
    it(`values: ")(()))"`, () => assert.strictEqual(validParentheses(")(()))"), false));
    it(`values: "(())((()())())"`, () => assert.strictEqual(validParentheses("(())((()())())"), true));

});

import { describe, it } from "node:test";
import assert from "node:assert";
import { findFirstRepeated } from "./solution.js";

describe("Tests", () => {
    it("Should pass tests", () => {
        assert.equal(findFirstRepeated([2, 1, 3, 5, 3, 2]), 3)
    });

    it("Should pass tests", () => {
        assert.equal(findFirstRepeated([1, 2, 3, 4]), -1)
    });
    
    it("Should pass tests", () => {
        assert.equal(findFirstRepeated([5, 1, 5, 1]), 5)
    });
});

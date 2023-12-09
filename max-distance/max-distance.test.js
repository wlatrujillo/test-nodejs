import { describe, it } from "node:test";
import assert from "node:assert";
import { maxDistance } from "./max-distance.js";

describe("Tests", () => {
    it("Should returns 2", () => {
        assert.equal(maxDistance('>>*<'), 2)
    });

    it("Should returns 2", () => {
        assert.equal(maxDistance('<<<>'), 2)
    });

    it("Should returns 5", () => {
        assert.equal(maxDistance('>***>'), 5)
    });

    it("Should returns 10", () => {
        assert.equal(maxDistance('**********'), 10)
    });

    it("Should returns 2", () => {
        assert.equal(maxDistance('<<**>>'), 2)
    });

});
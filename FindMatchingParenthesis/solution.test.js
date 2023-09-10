import { describe, it } from "node:test";
import assert from "node:assert";

String.prototype.findParenMatch = function (pos) {
    return pos
};


describe("Solution", function () {
    it("Should handle manual tests", function () {
        var str = ")((()))("
        assert.assertEquals(str.findParenMatch(0), -1)
        assert.assertEquals(str.findParenMatch(1), 6)
        assert.assertEquals(str.findParenMatch(2), 5)
        assert.assertEquals(str.findParenMatch(3), 4)
        assert.assertEquals(str.findParenMatch(4), 3)
        assert.assertEquals(str.findParenMatch(5), 2)
        assert.assertEquals(str.findParenMatch(6), 1)
        assert.assertEquals(str.findParenMatch(7), -1)
    })
})

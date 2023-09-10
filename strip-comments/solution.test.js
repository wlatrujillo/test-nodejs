import { describe, it } from "node:test";
import assert from "node:assert";
import { solution } from "./solution.js";

describe("Tests", () => {
    it("test", () => {
        function checkComments(input, markers, expected) {
            var actual;
            actual = solution(input, markers);
            return assert(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
        };

        checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
        checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
    });
});
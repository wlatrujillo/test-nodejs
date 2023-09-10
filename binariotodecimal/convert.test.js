import { describe, it } from "node:test";
import assert from "node:assert";

import convert from "./convert.js";



describe("this test function convert binario to decimal", () => {


    it("should convert binario to decimal ", () => {

        assert.strictEqual(convert(111), 7, "111 not equals to 7");

        assert.strictEqual(convert(1011110), 94, "1011110 not equals to 94");

        assert.strictEqual(convert(0), 0, "0 not equals to 0");

        assert.strictEqual(convert(1), 1, "1 not equals to 1");

        assert.strictEqual(convert(10), 2, "10 not equals to 2");

        assert.strictEqual(convert(101), 5, "101 not equals to 5");

    })

})




import { describe, it } from "node:test";
import assert from "node:assert";
import { decode } from "./decode.js";

describe("Tests", () => {
    it("Should returns hola mundo", () => {
        assert.equal(decode('hola (odnum)'), 'hola mundo')
    });

    it("Should returns hello world!", () => {
        assert.equal(decode('(olleh) (dlrow)!'), 'hello world!')
    });
    
    it("Should returns santaclaus", () => {
        assert.equal(decode('sa(u(cla)atn)s'), 'santaclaus')
    });

});
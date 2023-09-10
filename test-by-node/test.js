import test from "node:test";
import assert from "node:assert";

test("test Array.findLast", () => {
    const numbers = [3, 5, 6, 8, 9];
    const lastEven = numbers.findLast(n => n % 2 == 0);
    assert(lastEven, 8);
})
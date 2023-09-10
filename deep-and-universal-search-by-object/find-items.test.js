import { describe, it } from "node:test";
import assert from "node:assert";

const tree = {
    a: 4,
    b: {
        c: 5,
        f: 1,
        p: "ww",
        falseValue: false,
        undefinedValue: undefined,
        t: {
            y: 90,
            i: {
                s: "qwe",
                a: 90,
                aString: "90",
                nullValue: null,
            },
            p: "wwww",
            emptyStringValue: "",
            asd: [123, 34, 90],
        },
    },
};

describe("primitive values", function () {
    it(`given {
  "tree.b.t.y": 90,
  "tree.b.t.i.s": "qwe",
  "tree.b.t.i.a": 90,
  "tree.b.t.asd[2]": 90,
}`, function () {
        assert.deepEqual(findItems(tree, "qwe", 90), {
            "tree.b.t.y": 90,
            "tree.b.t.i.s": "qwe",
            "tree.b.t.i.a": 90,
            "tree.b.t.asd[2]": 90,
        });
    });
    it(`empty arguments: {}`, function () {
        assert.deepEqual(findItems(tree), {});
    });
    it(`find "null" value: { 'tree.b.t.i.nullValue': null }`, function () {
        assert.deepEqual(findItems(tree, null), { "tree.b.t.i.nullValue": null });
    });
    it(`find "undefuned" value: { 'tree.b.undefinedValue': undefined }`, function () {
        assert.deepEqual(findItems(tree, undefined), {
            "tree.b.undefinedValue": undefined,
        });
    });
});

describe("predicate", function () {
    const desiredValuesInput = [
        (value) => value > 100,
        (value) => typeof value === "string" && value.length > 3,
    ];

    it(`Custom predicate: given {
  "tree.b.t.p": "wwww",
  "tree.b.t.asd[0]": 123,
  }`, function () {
        assert.deepEqual(findItems(tree, ...desiredValuesInput), {
            "tree.b.t.asd[0]": 123,
            "tree.b.t.p": "wwww",
        });
    });

    it(`"Boolean" predicate: given {
  "tree.a": 4,
  "tree.b.c": 5,
  "tree.b.f": 1,
  "tree.b.p": "ww",
  "tree.b.t.y": 90,
  "tree.b.t.i.s": "qwe",
  "tree.b.t.i.a": 90,
  "tree.b.t.i.aString": "90",
  "tree.b.t.p": "wwww",
  "tree.b.t.asd[0]": 123,
  "tree.b.t.asd[1]": 34,
  "tree.b.t.asd[2]": 90,
}`, function () {
        assert.deepEqual(findItems(tree, Boolean), {
            "tree.a": 4,
            "tree.b.c": 5,
            "tree.b.f": 1,
            "tree.b.p": "ww",
            "tree.b.t.y": 90,
            "tree.b.t.i.s": "qwe",
            "tree.b.t.i.a": 90,
            "tree.b.t.i.aString": "90",
            "tree.b.t.p": "wwww",
            "tree.b.t.asd[0]": 123,
            "tree.b.t.asd[1]": 34,
            "tree.b.t.asd[2]": 90,
        });
    });
});
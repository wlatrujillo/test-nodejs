import { describe, it } from "node:test";
import assert from "node:assert";
import { cyberReindeer } from "./cyber-reindeer.js";

describe("Tests", () => {

    it("Should pass test", () => {
        assert.deepEqual(cyberReindeer('S..|...|..', 10), [
            'S..|...|..', // initial state
            '.S.|...|..', // sled advances on the road
            '..S|...|..', // sled advances on the road
            '..S|...|..', // sled stops at the barrier
            '..S|...|..', // sled stops at the barrier
            '...S...*..', // barrier opens, sled advances
            '...*S..*..', // sled advances on the road
            '...*.S.*..', // sled advances on the road
            '...*..S*..', // sled advances on the road
            '...*...S..', // passes through the open barrier
        ])
    });


});
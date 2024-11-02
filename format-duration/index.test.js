const formatDuration = require('./index');
const { describe, it } = require('node:test');
const assert = require('node:assert');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});

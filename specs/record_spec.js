var assert = require('assert');
var Record = require('../source/record.js')

describe("Record test", function() {
  var record;
  beforeEach(function() {
    record = new Record("Chad");
  });
  it("should have an artist", function() {
    assert.strictEqual(record.artist, "Chad");
  });
})

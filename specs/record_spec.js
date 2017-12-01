var assert = require('assert');
var Record = require('../source/record.js')

describe("Record test", function() {
  var record;
  beforeEach(function() {
    record = new Record("Chad", "Chopin Op.25 Etudes", "Classical");
  });

  it("should have an artist", function() {
    assert.strictEqual(record.artist, "Chad");
  });

  it("should have a title", function() {
    assert.strictEqual(record.title, "Chopin Op.25 Etudes")
  });

  it("should have a genre", function() {
    assert.strictEqual(record.genre, "Classical");
  });

  it("should have a price", function() {
    assert.strictEqual(record.price, 15);
  })
})

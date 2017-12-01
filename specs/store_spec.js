var assert = require('assert');
var Store = require('../source/store.js');
var Record = require('../source/record.js');

describe("Store test", function() {
  var store;
  var record;
  beforeEach(function() {
    store = new Store("Big Al's Record Store", "Glasgae", 1000);

    record = new Record("Chad", "Chopin Op.25 Etudes", "Classical", 15);
  });

  it('should have a name', function() {
    assert.strictEqual(store.name, "Big Al's Record Store");
  });

  it("should have a city", function() {
    assert.strictEqual(store.city, "Glasgae");
  });

  it("should have an inventory", function() {
    assert.deepStrictEqual(store.inventory, []);
  });

  it("should have a balance", function() {
    assert.strictEqual(store.balance, 1000);
  });

  it("should be able to add records", function() {
    store.addRecord(record);
    assert.deepStrictEqual(store.inventory, [record]);
  });
});

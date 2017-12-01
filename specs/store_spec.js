var assert = require('assert');
var Store = require('../source/store.js');
var Record = require('../source/record.js');

describe("Store test", function() {
  var store;
  var record;
  var record2;
  beforeEach(function() {
    store = new Store("Big Al's Record Store", "Glasgae", 1000);

    record = new Record("Chad", "Chopin Op.25 Etudes", "Classical", 15);

    record2 = new Record("Chad", "Recorder Fails", "Spoof", 20);
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

    store.addRecord(record);
    assert.deepStrictEqual(store.inventory, [record, record]);
  });

  it("should display inventory", function() {
    store.addRecord(record);
    assert.deepStrictEqual(store.displayInventory(), { "Chopin Op.25 Etudes": 1 });

    store.addRecord(record);
    assert.deepStrictEqual(store.displayInventory(), { "Chopin Op.25 Etudes": 2 });

    store.addRecord(record2);
    assert.deepStrictEqual(store.displayInventory(), { "Chopin Op.25 Etudes": 2, "Recorder Fails": 1 });
  });

  it("should be able to sell a record", function() {
    store.addRecord(record);
    store.sellRecord(record);
    assert.strictEqual(store.balance, 1015);
    assert.deepStrictEqual(store.inventory, []);
  });

  it("should not be able to sell a record it doesn't have", function() {
    store.sellRecord(record);
    assert.strictEqual(store.balance, 1000);
    assert.deepStrictEqual(store.inventory, []);
  });

  it("should be able to display financial status", function() {
    assert.deepStrictEqual(store.financialStatus(), { "Store balance": 1000, "Inventory value": 0 });
    store.addRecord(record);
    store.addRecord(record2);
    assert.deepStrictEqual(store.financialStatus(), { "Store balance": 1000, "Inventory value": 35});
  });

  it("should be able to display records of a specific genre", function() {
    store.addRecord(record);
    store.addRecord(record);
    store.addRecord(record2);

    assert.deepStrictEqual(store.findByGenre('Classical'), { "Chopin Op.25 Etudes": 2});
    
    assert.deepStrictEqual(store.findByGenre('Spoof'), { "Recorder Fails": 1});
  });


});

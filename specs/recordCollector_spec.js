var assert = require('assert');
var RecordCollector = require('../source/recordCollector.js');
var Record = require('../source/record.js');

describe("Record collector test", function() {
  var record;
  var record2;
  var collector;
  var collector2;
  beforeEach(function() {
    collector = new RecordCollector("Pierce",  35);

    record = new Record("Chad", "Chopin Op.25 Etudes", "Classical", 15);

    record2 = new Record("Jazzy McJazz", "Jazz hits", "Jazz", 20);

    collector2 = new RecordCollector("James", 1000);
    collector2.buyRecord(record);
    collector2.buyRecord(record);
    collector2.buyRecord(record2);
    collector2.buyRecord(record2);
  });

  it('should be able to buy a record', function() {
    assert.deepStrictEqual(collector.inventory, []);
    collector.buyRecord(record);
    assert.deepStrictEqual(collector.inventory, [record]);
  });

  it('should be able to sell a record', function() {
    collector.buyRecord(record);
    collector.buyRecord(record2);
    assert.deepStrictEqual(collector.inventory, [record, record2]);
    collector.sellRecord(record2);
    assert.deepStrictEqual(collector.inventory, [record]);
  });

  it('should deduct funds for a purchase', function() {
    assert.strictEqual(collector.balance, 35);
    collector.buyRecord(record);
    assert.strictEqual(collector.balance, 20);
  });

  it('should not be able to purchase when insufficient funds are available', function() {
    collector.buyRecord(record2);
    collector.buyRecord(record2);
    assert.deepStrictEqual(collector.inventory, [record2]);
    assert.strictEqual(collector.balance, 15);
  });

  it('should add funds when a record is sold', function() {
    collector.buyRecord(record);
    assert.strictEqual(collector.balance, 20);
    collector.sellRecord(record);
    assert.strictEqual(collector.balance, 35);
    assert.deepStrictEqual(collector.inventory, []);
  });

  it('should not be able to sell records that it doesn\'t have', function() {
    collector.sellRecord(record);
    assert.strictEqual(collector.balance, 35);
  });

  it('should be able to find the total value of inventory', function() {
    assert.strictEqual(collector2.getTotalValue(), 70);
  });

  it('should be able to find the value of inventory by genre', function() {
    assert.strictEqual(collector2.getTotalValue('Classical'), 30);
    assert.strictEqual(collector2.getTotalValue('Jazz'), 40);
  })

});

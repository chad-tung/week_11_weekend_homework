var assert = require('assert');
var RecordCollector = require('../source/recordCollector.js');
var Record = require('../source/record.js');

describe("Record collector test", function() {
  var record;
  var record2;
  var collector;
  beforeEach(function() {
    collector = new RecordCollector("Pierce",  35);

    record = new Record("Chad", "Chopin Op.25 Etudes", "Classical", 15);

    record2 = new Record("Jazzy McJazz", "Jazz hits", "Jazz", 20);
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
  })

});

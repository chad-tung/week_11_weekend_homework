var assert = require('assert');
var RecordCollector = require('../source/recordCollector.js');
var Record = require('../source/record.js');

describe("Record collector test", function() {
  var record;
  var collector;
  beforeEach(function() {
    collector = new RecordCollector("Pierce");

    record = new Record("Chad", "Chopin Op.25 Etudes", "Classical", 15);
  });

  it('should be able to buy a record', function() {
    assert.deepStrictEqual(collector.inventory, []);
    collector.buyRecord(record);
    assert.deepStrictEqual(collector.inventory, [record]);
  });

});

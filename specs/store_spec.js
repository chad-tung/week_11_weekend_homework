var assert = require('assert');
var Store = require('../source/store.js');

describe("Store test", function() {
  var store;
  beforeEach(function() {
    store = new Store("Big Al's Record Store")
  });
  
  it('should have a name', function() {
    assert.strictEqual(store.name, "Big Al's Record Store")
  });
});

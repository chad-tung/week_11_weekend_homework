var assert = require('assert');
var Store = require('../source/store.js');

describe("Store test", function() {
  it('should have a name', function() {
    assert.strictEqual(store.name, "Big Al's Record Store")
  });
});

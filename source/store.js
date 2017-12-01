var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

Store.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },
  displayInventory: function() {
    var hash = {};
    for (item of this.inventory) {
      if hash[item.title] = 0;
    }
    for (item of this.inventory) {
      hash[item.title] += 1;
    }
    return hash;
  }

};

module.exports = Store;

var _ = require('lodash');

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
      hash[item.title] = 0;
    }
    for (item of this.inventory) {
      hash[item.title] += 1;
    }
    return hash;
  },

  sellRecord: function(record) {
    if (this.inventory.includes(record)) {
      this.balance += record.price;
      this.inventory.splice(_.findIndex(this.inventory, record), 1);
    }
  },

  financialStatus: function() {
    var hash = {};
    hash["Store balance"] = this.balance;
    hash["Inventory value"] = 0;
    for (item of this.inventory) {
      hash["Inventory value"] += item.price;
    }
    return hash;
  }

};

module.exports = Store;

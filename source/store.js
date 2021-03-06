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
      if (hash[item.title] == undefined) {
        hash[item.title] = 1;
      }
      else {
        hash[item.title] += 1;
      }
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
  },

  findByGenre: function(genre) {
    var hash = {};
    var filteredArray = _.filter(this.inventory, ['genre', genre]);
    for (item of filteredArray) {
      if (hash[item.title] == undefined) {
        hash[item.title] = 1;
      }
      else {
        hash[item.title] += 1;
      };
    };
    return hash;
  }

};

module.exports = Store;

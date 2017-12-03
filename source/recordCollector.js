var _ = require('lodash');

var RecordCollector = function(name, balance) {
  this.name = name;
  this.inventory = [];
  this.balance = balance;
}

RecordCollector.prototype = {
  buyRecord: function(record) {
    if (this.balance >= record.price) {
      this.inventory.push(record);
      this.balance -= record.price;
    };
  },

  sellRecord: function(record) {
    for(item of this.inventory) {
      if (item === record) {
        this.inventory.splice(this.inventory.indexOf(item), 1);
        this.balance += item.price;
        break;
      };
    };
  },

  getTotalValue: function(genre) {
    if (genre == undefined) {
      return _.sumBy(this.inventory, function(record) {
        return record.price;
      })
    } else {
      return _.sumBy(_.filter(this.inventory, ['genre', genre]), function(record) {
        return record.price;
      });
    };
  },

  getMVRecord: function() {
    return _.maxBy(this.inventory, function(record) {
      return record.price;
    });
  },

  sortRecords(input) {
    if (input.toLowercase() == 'max') {
      _.sortBy
    }
  }
};

module.exports = RecordCollector;

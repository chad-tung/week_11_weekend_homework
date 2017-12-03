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
      };
    };
  }
}
module.exports = RecordCollector;

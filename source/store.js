var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

Store.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  }
};

module.exports = Store;

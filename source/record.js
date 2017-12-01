var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype = {
  properties: function() {
    var description = ("Artist: " + this.artist + "\nTitle: " + this.title + "\nGenre: " + this.genre + "\nPrice: " + this.price);

    return description;
  }
}

module.exports = Record;

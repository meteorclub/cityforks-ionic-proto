Template.places.helpers({
  places: function() {
    return Places.find();
  },
  price: function(price) {
    return "$".repeat(this.price_level);
  }
});

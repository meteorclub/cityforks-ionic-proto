Template.place.helpers({
  place: function() {
    return Places.findOne(Router.current().params._id)
  },
  price: function() {
    return "$".repeat(this.price_level);
  },
  types: function() {
    return this.types.join(', ');
  }
});

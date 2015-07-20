Meteor.startup(function() {
  navigator.geolocation.getCurrentPosition(success);
});

success = function(position) {
  debugger
  Session.set('lat', position.coords.latitude);
  Session.set('long', position.coords.longitude);
  // Meteor.call('fetchNearbyLocations', position.coords);
};

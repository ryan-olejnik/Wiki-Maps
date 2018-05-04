$(document).ready(function() {

  // add function to display search results

  function getGeocode(event) {

    // Prevent actual submit
    event.preventDefault();

    // Get textbox value
    var location = $('#location-input').val();

    // AJAX GET request to Google Maps Geocode
    $.ajax({
        type : 'GET',
        url : 'https://maps.google.com/maps/api/geocode/json',
        // url : 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
        data : {
            address : location,
            // input: location,
            key : 'AIzaSyAYFKtQIeixhpaOG8c72kkrb9ZN9L-ccIc'
        }
    })
    .done(function(data) {
      console.log(data);
    });

  }

  // Event Listener for form submit
  $("#location-form").on("submit", function(event) {
    getGeocode(event);
  });

});

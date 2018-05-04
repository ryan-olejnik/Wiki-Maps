var map;
var service;
var infowindow;

function initMap() {

  // var map;
  // var service;
  // var infowindow;

  var toronto = new google.maps.LatLng(43.6532,-79.3832);

  map = new google.maps.Map(document.getElementById('map'), {
      center: toronto,
      zoom: 15
    });

  var request = {
    location: map.getCenter(),
    // radius: '500',
    query: 'mcdonalds'
  };

  infowindow = new google.maps.InfoWindow();

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    console.log(place);
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

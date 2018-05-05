// var map;

function initMap() {

  var location = {lat:43.6532,lng:-79.3832};

  // Initial map options
  var options = {
    zoom:12,
    center: location
  };

  // Create Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Event listener click on map
  google.maps.event.addListener(map, 'click', function(event){
    // Add marker
    addMarker({coords:event.latLng});
  });

  var markers = [{
    latitude: 43.654037,
    longitude: -79.401611,
    title: 'Cosmic Treats'},
    {
    latitude: 43.652187,
    longitude: -79.402506,
    title: 'Greens Vegetarian Resturante'
  }];


  function addMarker(props){
    var marker = new google.maps.Marker({
      position: {lat: props.latitude, lng: props.longitude},
      map:map
      //icon:props.iconImage
    });

    var infoWindow = new google.maps.InfoWindow({
      content:props.title
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });

    // Adds marker on click
    // marker.addListener('click', function(){
    //   infoWindow.open(map, marker);
    // });
  }

  for (var i = 0; i < markers.length; i++) {
    // Add marker
    console.log(i);
    addMarker(markers[i]);
  }

}



// var map;




function initMap() {

  // Initil map center - Toronto
  var location = {lat:43.6532,lng:-79.3832};

  // Initial veiw map options
  var options = {
    zoom:12,
    center: location
  };

  // Create Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Event listener click on map
  // google.maps.event.addListener(map, 'click', function(event){
  //   // Add marker
  //   addMarker({coords:event.latLng});
  // });

  //
  var markers = poi_list;


  function addMarker(props){

    var marker = new google.maps.Marker({
      // position: new google.maps.LatLng(props.latitude, props.longitude),
      position: {lat: Number(props.latitude), lng: Number(props.longitude)},
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
    // Add individual marker
    addMarker(markers[i]);
  }

}



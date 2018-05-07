var lastInfoWindow;
var markers = [];


function initMap() {

  // Initil map center - Toronto
  var location = {lat: 31.22685967, lng: 11.24664299};

  // Initial veiw map options
  var options = {
    zoom:2.25,
    center: location
  };

  // Create Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Event listener click on map
  // google.maps.event.addListener(map, 'click', function(event){
  //   // Add marker
  //   addMarker({coords:event.latLng});
  // });


  // Assigns POI list to array of markers
  ////////////// Might want to consider just using poi_list
  // var markers = poi_list;
  // var markers = [];


  var bounds  = new google.maps.LatLngBounds();

  function addMarker(props){

    var marker = new google.maps.Marker({
      // position: new google.maps.LatLng(props.latitude, props.longitude),
      position: {lat: Number(props.latitude), lng: Number(props.longitude)},
      animation: google.maps.Animation.DROP,
      map:map
      //icon:props.iconImage
    });


    var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
    bounds.extend(loc);


    // Create new infowindow
    var infoWindow = new google.maps.InfoWindow({
      content:props.title
    });

    // Add listener to marker to open new info window
    marker.addListener('click', function(){

      // Closed last infowindow when marker is clicked
      lastInfoWindow && lastInfoWindow.close();
      // Opens new infowindow
      infoWindow.open(map, marker);
      // Makes a pointer to lastInfoWindow from current
      lastInfoWindow = infoWindow;

    });


    // Pushes marker to array of other markers
    markers.push(marker);



    // Adds marker on click
    // marker.addListener('click', function(){
    //   infoWindow.open(map, marker);
    // });
  }



  for (var i = 0; i < poi_list.length; i++) {
    // Add individual marker
    addMarker(poi_list[i]);
  }


  // auto-zoom
  map.fitBounds(bounds);
  // auto-center
  map.panToBounds(bounds);


}



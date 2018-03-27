// My global variables
var map, infoWindow,old_position;
var tolerance = 10;

// My initMap function that initializes my map using my Google API_KEY

function initMap() {
  old_position = new google.maps.Marker({
      lat: 43.668111,
      lng: -79.826464
  });


  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18
  });
  infoWindow = new google.maps.InfoWindow();

  // HTML5 Geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // Zoom in on user's position and show a callout with "You are here"
      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here!');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  // Listen for a click, position a marker at the location e

  map.addListener('click', function(e) {
    var location = e.latLng;
    place_marker(location);
  });
}

  // Place a marker at position l, on map map, with the emoji selected from the class icon_use parent, in this case a form

  function place_marker(l) {
    var emoji = document.getElementById('icon_use').value;
    var marker = new google.maps.Marker({
      position: l,
      map: map,
      icon: emoji
    });

    // Log to the console latitude, longitude, and emoji of every marker as a separate entry
    console.log(l.lat()+ " " + l.lng() + " " + emoji);
  }

// Check for geolocation availability

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(set_my_position);
} else {
    alert("Geolocation doesn't work in your browser");
}

// Set my position function, use emoji Player, at positions coordslat and coordslong

function set_my_position(position) {
    old_position.setMap(null);
    var emoji = "Player.png";
    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: emoji
    });

    // old_position deletes old positions to avoid Player emojis randomly left behind

    old_position = marker;
}


function inputChange() {
 console.log(document.getElementById("name").value);
}

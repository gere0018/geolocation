document.addEventListener("DOMContentLoaded", function(){

  if( navigator.geolocation ){
    var getLocation = {enableHighAccuracy: false, timeout:3600, maximumAge:0};
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, getLocation );
  }else{
    alert("OOPS!! your browser needs to be updated and currently does not support location based services.")
  }
});

function reportPosition( position ){
  var output = document.querySelector("#output");
  output.innerHTML += "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
  + "Accuracy: " + position.coords.accuracy + "m<br/>"
  + "Altitude: " + position.coords.altitude + " m<br/>"
}

function gpsError( error ){
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}


document.addEventListener("DOMContentLoaded", function(){
  if( navigator.geolocation ){
    var getLocation = {enableHighAccuracy: false, timeout:3600, maximumAge:3600};
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, getLocation );
    drawImage();
      alert("hello");
  }else{
    alert("OOPS!! your browser needs to be updated and currently does not support location based services.")
  }
});

function reportPosition( position ){
  var output = document.querySelector("#output");
  output.innerHTML += "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
  + "Altitude: " + position.coords.altitude + " m<br/>"
}
function drawImage(){
  var canvas = document.createElement("canvas");
  var context = canvas.getContext('2d');
  var x = 0;
  var y = 0;
  var width = 400px;
  var height = 400px;
  var imageObj = new Image();
 imageObj.onload = function() {
    context.drawImage(imageObj, x, y, width, height);
  };
 imageObj.src = 'https://maps.googleapis.com/maps/api/staticmap?center=Banf,Alberta&amp;zoom=14&size=400x400&amp;markers=size:mid%7Ccolor:red%7Ccenter;key=AIzaSyAOXUJlnbNxvV7HRtrslv_vFBT7tCJ4VZc';

}

function gpsError( error ){
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}

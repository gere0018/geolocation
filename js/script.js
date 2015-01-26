
document.addEventListener("DOMContentLoaded", function(){

  if( navigator.geolocation ){
    var getLocation = {enableHighAccuracy: false, timeout:60000, maximumAge:60000};
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, getLocation );
  }else{
    alert("OOPS!! your browser needs to be updated and currently does not support location based services.")
  }
});

function reportPosition( position ){
  var output = document.querySelector("#output");
  output.innerHTML += "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
drawImage(position);
}

function drawImage(position){
  var canvas = document.createElement("canvas");
  var context = canvas.getContext('2d');
  var x = 0;
  var y = 0;
  var width = 400;
  var height = 400;
  var imageObj = new Image();
 imageObj.onload = function() {
    context.drawImage(imageObj, x, y, width, height);
  };
 imageObj.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + ","+ position.coords.longitude + "&zoom=14&size=400x400&markers=color:red%7C" + position.coords.latitude + ","+ position.coords.longitude + ";key=AIzaSyAOXUJlnbNxvV7HRtrslv_vFBT7tCJ4VZc";
document.querySelector('#output').appendChild(canvas);
}

function gpsError( error ){
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}

$(document).ready(function() {

// Random User Generator API
// How to use
// You can use AJAX to call the Random User Generator API and will receive a randomly 
// generated user in return. If you are using jQuery, you can use the $.ajax() function in the 
// code snippet below to get started.
// Format parameters examples...
// GENDER --> http://api.randomuser.me/?gender=female
// MULTIPLE USERS --> http://api.randomuser.me/?results=5000
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }

    });    

//Product Info
$.ajax({
  url: 'https://json-data.herokuapp.com/darts/info',
  dataType: 'json',
  success: function(productInfo) {
    console.log(productInfo);
    $productCard = $("#productCard");
    $productCard.append(`<h3> ${productInfo.data.product.title} </h3>`)
  }
});



// Google Map


});


var googleMap = document.getElementById("googleMap");

      function initMap() {
        googleMap = new google.maps.Map(googleMap, {
          center: {lat: 30.0218667, lng: -90.0225584},
          zoom: 8
        });
      }

      window.initMap = initMap;

      [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#63b5e5"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#a4343a"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e7e7e0"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#e7e7e0"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"0"},{"color":"#1d4f91"}]}]
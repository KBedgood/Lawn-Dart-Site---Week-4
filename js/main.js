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
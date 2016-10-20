$(document).ready(function() {

    //Defining person id
    $person1 = $("#person1");
    $person2 = $("#person2");
    $person3 = $("#person3");
    $profile = $(".profile");



    // Random User Generator API
    $.ajax({
        url: 'https://randomuser.me/api/?results=3',
        dataType: 'json',
        success: function(users) {
            users.results.forEach(function(user) {
                console.log(user.picture.medium);
                $profile.append(` 
            <div class="userName col-md-4">
            <img src='${user.picture.medium}'>
            </div
                `)
            });
        }
    });

    //Testamonials 
    $.ajax({
        url: 'https://json-data.herokuapp.com/darts/testimonials',
        dataType: 'json',
        success: function(testimonials) {
            testimonials.results.forEach(function(testimonial) {
                console.log(testimonial.name);
                $profile.append(`
              <div class="userName col-md-4">
              <h3>${testimonial.name}</h3>
              <p>${testimonial.name}</p>
        </div>
              `)
            })
        }
    });

    //Product Info
    $.ajax({
        url: 'https://json-data.herokuapp.com/darts/info',
        dataType: 'json',
        success: function(productInfo) {
            $productCardTitle = $("#productCardTitle");
            $productCardDescription = $("#productCardDescription");
            $productCardTitle.append(`<h2>${productInfo.data.product.title}</h2>`)
            $productCardDescription.append(`<p>${productInfo.data.product.description}</p>`)

        }
    });

});

// Google Map

var googleMap = document.getElementById("googleMap");

function initMap() {
    googleMap = new google.maps.Map(googleMap, {
        center: { lat: 30.0218667, lng: -90.0225584 },
        zoom: 8
    });
}

<<<<<<< HEAD
      window.initMap = initMap;

      [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#63b5e5"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#a4343a"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e7e7e0"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#e7e7e0"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"0"},{"color":"#1d4f91"}]}]
=======
window.initMap = initMap;
>>>>>>> 2467dbcdc4a04c40fe8d3b2ab3f64d936b049f3b

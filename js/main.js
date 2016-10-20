$(document).ready(function() {

    //Defining person id
    $person1 = $("#person1");
    $person2 = $("#person2");
    $person3 = $("#person3");
    $profile = $(".profile");



    // Random User Generator API
    // How to use
    // You can use AJAX to call the Random User Generator API and will receive a randomly 
    // generated user in return. If you are using jQuery, you can use the $.ajax() function in the 
    // code snippet below to get started.
    // Format parameters examples...
    // GENDER --> http://api.randomuser.me/?gender=female
    // MULTIPLE USERS --> http://api.randomuser.me/?results=5000

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

window.initMap = initMap;

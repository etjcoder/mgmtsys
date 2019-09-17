

function initMap() {
    $(document).ready(function(){ 

    var options = {
        zoom: 10,
        center: {
            lat: 39.95258,
            lng: -75.165222
        },
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    // Array of Markers

    var markers = [

    ]

    // Loop through Markers

    for (i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }


    // Add Marker Function
    function addMarker(jobsites) {
        var marker = new google.maps.Marker({
            position: jobsites.coords,
            map: map,
        })

        // Checking for custom icon
        if (jobsites.iconImage) {
            // Setting icon image
            marker.setIcon(jobsites.iconImage);
        }

        // Checking for content
        if (jobsites.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: jobsites.content
            });
        }

        // Listener on coords to show content
        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        })
    }

    // Listen for click on map

    // google.maps.event.addListener(map, 'click', function (event) {
    //     addMarker({ coords: event.latLng });
    // })



    function codeAddress() {
        var geocoder = new google.maps.Geocoder();
        var address = "3877 Manayunk Avenue, Philadelphia, PA, USA";
        var numAddress = 0
        // db.Jobsite.findAll({}).then(function (dbJobsites) {
        //     res.json(dbJobsites);
        //   });


        markerArray = [];


        $.ajax("/api/jobsites", {
            type: "GET"
        }).then(function (searchResults) {
            console.log(searchResults);
            numAddress = searchResults.length;
            console.log("number of address: " + numAddress)

            for (i = 0; i < numAddress; i++) {
                var profits = searchResults[i].location_profits;
                var name = searchResults[i].jobsite_name;
                var contact = searchResults[i].primary_contact;
                var phone = searchResults[i].phone_number;
                var email = searchResults[i].email;
                // createInfoWindow(infoWindowObj);
                markerObj = {
                    name,
                    contact,
                    phone,
                    email,
                    profits
                }

                // console.log(`location${i} profits: ${locationProfits}`)
                geocoder.geocode({ 'address': searchResults[i].address }, makeCallback(markerObj))

                function makeCallback(Obj) {
                    var geoCodeCallback = function(results, status) {
                            var jobsite = Obj;
                            // console.log(i);
                          
                            var marker = new google.maps.Marker({
                                map: map,
                                position: results[0].geometry.location

                            })

                            var infoWindow = new google.maps.InfoWindow({
                                content: `<h3>${jobsite.name}</h3>
                                            <hr>
                                            <h4>Contact: ${jobsite.contact}</h4>
                                            <a href="tel:${jobsite.phone}">Phone:${jobsite.phone}</a>
                                            <br>
                                            <a href="mailto:${jobsite.email}">Email:${jobsite.email}</a>`
                            });
                            marker.addListener("click", function () {
                                infoWindow.open(map, marker);
                            })



                            // Checking for custom icon
                            if (jobsite.profits > 0 || jobsite.profits < 0) {
                                // Setting icon image
                                marker.setIcon("https://i.stack.imgur.com/rU427.png");
                            } else {
                                marker.setIcon("https://i.stack.imgur.com/cdiAE.png");
                            }
                    


                    }
                    return geoCodeCallback;
                }


            }

        })

        // geocoder.geocode ( {
        //     'address': address
        // }, function(results, status){
        //     if (status == 'OK') {
        //         console.log(results[0].geometry.location)
        //         var marker2 = new google.maps.Marker({
        //             map: map,
        //             position: results[0].geometry.location
        //         })
        //     }
        // })


    }

    codeAddress()

})
}

     // {
        //     coords:{ lat: 40.018740, lng: -75.208980 },
        //     iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-circle.png',
        //     content: "<p>Evan's house<p>"
        // },
        // {
        //     coords:{ lat: 39.977590, lng: -75.416780 },
        // },
        // {
        //     coords:{ lat: 39.940689, lng: -75.198807 },
        // }
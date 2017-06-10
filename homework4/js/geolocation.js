/*
Deanna Yee
deannayee@my.smccd.edu
geolocation.js
homework4
5/1/17
*/

$(document).on("pageinit", "#locationpage", function(e, data){
	//Global Variables for geolocation
	var geo = navigator.geolocation;

	if(geo){
		geo.getCurrentPosition(displayLocation);
	}else{
		alert("Oops, Geolocation API is not supported.");
	}

	/*This function displays the latitude and longitude when the
		browser has a location.*/
	function displayLocation(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		

		$("#location").html("You are at Latitude: " + latitude +
			", <br> Longitude: " + longitude);

		displayMap(position.coords);
	}

	//This method is used to display Google Map
	function displayMap( coords ) {
		var googleLatAndLong = new google.maps.LatLng( coords.latitude, coords.longitude );

		var mapOptions = {
			zoom: 15,
			center: googleLatAndLong,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};

		var mapDiv = document.getElementById( 'map' );
		map = new google.maps.Map( mapDiv, mapOptions );

		var title = 'Your Location';
		var content = 'You are here: ' + coords.latitude + ', ' + coords.longitude;
		addMarker( map, googleLatAndLong, title, content );
	}

	/*This function creates a marker, an InfoWindo and 
		add a click handler on the Marker.*/
	function addMarker(map, latlong, title, content){
		var markerOptions = {
			position: latlong,
			map: map,
			title: title,
			clickable: true
		};
		var marker = new google.maps.Marker(markerOptions);
		var infoWindowOptions = {
			content: content,
			position: latlong
		};
		var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
		google.maps.event.addListener(marker, 'click', function(){
			infoWindow.open(map);
		});
	}	
});




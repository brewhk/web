Template.home.onCreated(function () {
	// If the function is defined already, don't define it again
	if (typeof window.initMap !== "function") {
		// Google Maps JavaScript API requires the global variable
		// Making this explicit by appending `window.``
		window.initMap = function () {
			var brewMapType = new google.maps.StyledMapType([{
				"featureType": "all",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffb1b0"
				}]
			}, {
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#2f0700"
				}]
			}, {
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "landscape.man_made",
				"elementType": "all",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "poi.medical",
				"elementType": "all",
				"stylers": [{
					"visibility": "simplified"
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "all",
				"stylers": [{
					"visibility": "simplified"
				}]
			}, {
				"featureType": "poi.school",
				"elementType": "all",
				"stylers": [{
					"visibility": "simplified"
				}]
			}, {
				"featureType": "poi.sports_complex",
				"elementType": "all",
				"stylers": [{
					"visibility": "simplified"
				}]
			}, {
				"featureType": "road",
				"elementType": "all",
				"stylers": [{
					"visibility": "on"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#fcfcfc"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels",
				"stylers": [{
					"visibility": "on"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#2f0700"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "transit",
				"elementType": "labels.text.fill",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#2f0700"
				}]
			}, {
				"featureType": "transit",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "transit",
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "on"
				}, {
					"hue": "#ff2600"
				}]
			}, {
				"featureType": "transit.station.rail",
				"elementType": "all",
				"stylers": [{
					"visibility": "on"
				}, {
					"hue": "#ff0500"
				}]
			}, {
				"featureType": "transit.station.rail",
				"elementType": "labels.text",
				"stylers": [{
					"color": "#2f0700"
				}]
			}, {
				"featureType": "transit.station.rail",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "water",
				"elementType": "all",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#fcfcfc"
				}, {
					"lightness": -20
				}]
			}, {
				"featureType": "transit.station.bus",
				"elementType": "all",
				"stylers": [{
					"visibility": "off"
				}]
			}], {name: 'Brew'});

			var myLatLng = {lat: 22.373776, lng: 114.116446};

			var map = new google.maps.Map(document.getElementById('home-map'), {
				zoom: 17,
				center: myLatLng,
				scrollwheel: false,
				streetViewControl: false,
				mapTypeControl: false,
				mapTypeId: 'brewmap'
			});

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Brew Creative Limited',
				icon: "android-chrome-48x48.png"
			});

			var contentString = '<div class="map-info-box__container">'
				+ '<p class="map-info-box__companyName">Brew Creative Limited</p>'
				+ '<p class="map-info-box__address">Room 1905, Nan Fung Centre, 264-298 Castle Peak Road, Tsuen Wan, Hong Kong</p>'
				+ '<button class="map-info-box__button">Contact Us</button>'
				+'</div>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			map.mapTypes.set('brewmap', brewMapType);
			map.setMapTypeId('brewmap');

			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		}	
	}
});

Template.home.onRendered(function () {

	$('.project-slider').owlCarousel({
		pagination: false,
		navigation : true,
		navigationText : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		autoPlay: true,
		stopOnHover: true
	});

	if(window.mapLoaded !== true) {
		var renderMap = function (countryCode) {
			if(countryCode === "CN") {
	        	$.getScript( "http://maps.google.cn/maps/api/js?key=" + GOOGLE_MAPS_BROWSER_KEY + "&callback=initMap", function( data, textStatus, jqxhr ) {

				});
	        } else {
	        	$.getScript( "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_BROWSER_KEY + "&callback=initMap", function( data, textStatus, jqxhr ) {

				});
	        }
	        window.mapLoaded = true;
		};

		$.getJSON('http://ipinfo.io/json/', function(data, textStatus, jqXHR){
			renderMap(data.country);
	    });
	} else {
		window.initMap();
	}
});

Template.home.events({
	'click .map-info-box__button': function () {
		Router.go('contact-us');
	}
});
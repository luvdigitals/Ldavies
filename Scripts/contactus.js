var map;
var brooklyn = new google.maps.LatLng(51.5166039, -0.1329542);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

    var featureOpts = [
      {//featureType: 'poi.business',
          //elementType: 'geometry',
          stylers: [
            { hue: '#dd0d0d' }
          ]
      }
    ];

    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: brooklyn,
        mapTypeControlOptions: {
            //mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var styledMapOptions = {
        name: 'Custom Style'
    };
    var marker = new google.maps.Marker({
        position: brooklyn,
        map: map,
        //title: 'Hello World!'
    });
    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);
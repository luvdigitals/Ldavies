
var markers = [
    {
        "title": 'La Poule au Pot',
        //51.495498,-0.142748
        "lat": '51.4909861',
        "lng": '-0.1548227',
        "description": "Possibly London's most romantic candlelit restaurant, a taste of rustic French cuisine in the heart of Belgravia",
        "icon": "http://ld.luvdigital.co.uk/images/mapl1.png"
    },

    {
        //51.4905288,-0.1383269,
        //51.4917631,-0.1341271
        "title": 'Tinello',
        "lat": '51.490084',
        "lng": '-0.1551886',
        "description": 'Classic Tuscan Italian dishes with a smart, contemporary twist - don’t miss their amazing selection of wines by the glass',
        "icon": "http://ld.luvdigital.co.uk/images/mapl1.png"
    },
    {
        //51.4956304,-0.1429223,
        // 51.4926737,-0.1406707
        "title": 'Science Museum',
        "lat": '51.4978095',
        "lng": '-0.1767122',
        "description": "One of the World's best Science museums with a vaste range of interactive displays - a really hands on experience for the whole family!",
        "icon": "http://ld.luvdigital.co.uk/images/mapl1.png"
    },
    {
        //51.4949004,-0.1442514
        //51.4883958,-0.1375197
        "title": 'Ukraine',
        "lat": '48.3029383',
        "lng": '26.694168',
        "description": 'The "mother of parliaments", with Big Ben keeping time, this is a "must see" world landmark, we can arrange guided tours (summer only)',
        "icon": "http://ld.luvdigital.co.uk/images/mapl_ukraine.png"
    },
    {
        //51.4949004,-0.1442514
        //51.4883958,-0.1375197
        "title": 'Australia',
        "lat": '-25.2365471',
        "lng": '115.016243',
        "description": "Lorem Ipsum is not simply random text.",
        "icon": "http://ld.luvdigital.co.uk/images/map_australia.png"
    },
    {
        //51.4949004,-0.1442514
        //51.4883958,-0.1375197
        "title": 'Ldavies',
        "lat": '36.2427347',
        "lng": '-113.7459252',
        "description": "Lorem Ipsum is not simply random text.",
        "icon": "http://ld.luvdigital.co.uk/images/map_us.png"
    },
     {
         //51.4949004,-0.1442514
         //51.4883958,-0.1375197
         //51.4900245,-the0.1382343
         "title": 'Ldavies',
         "lat": '51.489929',
         "lng": '-0.137802',
         "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
         "icon": "http://ld.luvdigital.co.uk/images/mapl1.png"
     }
];
window.onload = function () {
    LoadMap();
}
function LoadMap() {

    var styles = [
  {
      stylers: [
      { hue: "" },
      { saturation: -80 }
      ]
  }, {
      featureType: "road",

      stylers: [
      { lightness: '' },
      { visibility: "simplified" }
      ]
  }

    ];


    var mapOptions = {
        // center: new google.maps.LatLng(markers[0].lat, markers[0].lng),51.4897942, -0.137802
        center: new google.maps.LatLng(53.800651, -4.064941),
        zoom: 3


    };
    var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
    map.setOptions({ styles: styles });
    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();
    /* styling for icon*/
    var image = {
        url: 'http://belgrave.luvdigital.co.uk/images/pointer.png',
        /// <reference path="../images/pointer.png" />

        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };

    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title,

            icon: data.icon
        });

        //Attach click event to the marker.
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                infoWindow.setContent("<div style = 'width:200px;min-height:40px'><h1>" + data.title + "</h1>" + data.description + "</div>");
                infoWindow.open(map, marker);

            });
        })(marker, data);
    }
}
///////////////MAP CLASS///////////////
///////////////////////////////////////
function CircleMap(idForMap, zoom = 14, angle, idForInstuctions, center = { lat: 33.989073, lng: -84.507361 }) {
    this.map = new google.maps.Map(document.getElementById(idForMap), {
        zoom: zoom,
        center: center
    });
    this.name = idForMap;
    this.center = center;
    this.zoom = zoom;
    this.markerArray = [];
    this.waypoints = [];
    this.latArray = [];
    this.lngArray = [];
    this.angle = angle;
    this.startingAngle = angle;
    this.idForInstuctions = idForInstuctions;
}

CircleMap.prototype.initialize = function (newCenter = "") {
    if (newCenter !== "") {
        this.center = newCenter;
    }
    this.marker = new google.maps.Marker({
        position: this.center,
        map: this.map
    });
    this.directionsDisplay = new google.maps.DirectionsRenderer({ map: this.map });



    this.lat = this.center.lat;
    this.lng = this.center.lng;

    var init_lat_lng = new google.maps.LatLng(this.lat, this.lng);
    this.markerArray.push(this.marker);
    this.latArray.push(init_lat_lng.lat()) /////push lat of our initial point
    this.lngArray.push(init_lat_lng.lng()) /////push lng of our initial point
    console.log(this.latArray);
}

CircleMap.prototype.reset = function () {
    this.map = new google.maps.Map(document.getElementById(this.name), {
        zoom: this.zoom,
        center: this.center
    })
    this.marker = new google.maps.Marker({
        position: this.center,
        map: this.map
    });
    this.directionsDisplay = new google.maps.DirectionsRenderer({ map: this.map });
    this.directionsDisplay.setPanel(document.getElementById(this.idForInstuctions));
    this.angle = this.startingAngle;
}

CircleMap.prototype.findCoordinates = function (lat, lng, range) {
    var numOfPoints = 6;
    var degreesPerPoint = -5 / numOfPoints;
    var x2;
    var y2;

    for (let i = 0; i <= numOfPoints; i++) {
        x2 = Math.cos(this.angle) * range;
        y2 = Math.sin(this.angle) * range;
        newLat = lat + x2;
        newLng = lng + y2;
        lat_lng = new google.maps.LatLng(newLat, newLng);
        var marker = new google.maps.Marker({
            position: lat_lng,
            map: this.map,
        });
        this.latArray.push(lat_lng.lat()); ////push lats of points we just looped through and placed on map
        this.lngArray.push(lat_lng.lng());
        this.markerArray.push(marker);
        this.angle += degreesPerPoint;
    }
}

CircleMap.prototype.calculateAndDislayRoute = function (directionsService, stepDisplay) {

    for (let i = 0; i < this.markerArray.length; i++) {
        this.markerArray[i].setMap(null);
    }
    for (let i = 1; i <= 6; i++) {
        this.waypoints.push({
            location: {
                lat: this.latArray[i],
                lng: this.lngArray[i]
            }
        });
    }
    directionsService.route({
        origin: this.center,
        destination: this.center,
        waypoints: this.waypoints,
        travelMode: "WALKING",
        optimizeWaypoints: true,
        provideRouteAlternatives: true,
        avoidHighways: true,
    }, (response, status) => {
        if (status === "OK") {
            document.getElementById('warning-panel').innerHTML = '<b>' + response.routes[0].warnings + '</b>';
            this.directionsDisplay.setDirections(response);
            $('.adp-placemark').hide()
            $('.adp-text').hide()
        } else {
            window.alert("Request failed due to" + status)
        }
    });
}


//////////////////////////////
//////////GLOBALS/////////////
//////////////////////////////
var mapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
var roadURL = `https://roads.googleapis.com/v1/snapToRoads?path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796&key=${apiKey}`
var userLocation;

var userLocationLatLng;
var init_lat;
var init_lng;
var range;
var geocoder;
var stepDisplay;
var lat_lng;
//////////////MAPS/////////////
var runningMaps = [];
var directionsDisplay;
var directionsService;
var latArray = []
var lngArray = []
var latArray2 = []
var lngArray2 = []
var latArray3 = []
var lngArray3 = []

///////////////////////////////////////////////////////
////////////CODE THAT ACTUALLY RUNS ON LOAD////////////
///////////////////////////////////////////////////////

var ajaxRequest = $.ajax({
    type: 'GET',
    url: mapURL,
    url2: roadURL,
    dataType: 'jsonp',
    jsonpCallback: 'initMap',
    async: false, // this is by default false, so not need to mention
    crossDomain: true // tell the browser to allow cross domain calls.

});

$(document).ready(function () {
    var timeId = 0
    $('.startButton').click(function () {
        var date = new Date()
        date = date.getTime()
        $.post('http://localhost:3000/start', { date }, function (data, status) {
            timeId = data.insertId
            console.log(data)
            $('#stopButtonLink').attr('href', $('#stopButtonLink').attr('href') + '&id=' + data.insertId)
        })
    })

    $('.stopButton').click(function () {
        if (timeId == 0) {
            return
        }
        var date = new Date()
        date = date.getTime()
        $.post('http://localhost:3000/stop', { date: date, timeId: timeId, address: address, distance: distance }, function (data, status) {

        })
    })

    initMap = function (coordLocation = "") {
        if (runningMaps.length === 0) {
            runningMaps.push(new CircleMap('map', 14, 90, 'instructions'));
            runningMaps.push(new CircleMap('map2', 14, 45, 'instructions2'));
            runningMaps.push(new CircleMap('map3', 14, 120, 'instructions3'));
            runningMaps.push(new CircleMap('map4', 14, 25, 'instructions4'));
        }

        directionsService = new google.maps.DirectionsService;
        stepDisplay = new google.maps.InfoWindow;

        runningMaps.map((currMap) => {
            currMap.initialize(coordLocation);
            currMap.directionsDisplay.setPanel(document.getElementById(currMap.idForInstuctions));
        })

        $("#instructions").show()
        $(".milesBox").show()\
        if (distance == "1-3 miles") {
            range = .011
        } else if (distance == "3-5 miles") {
            range = .013
        } else if (distance == "5-7 miles") {
            range = .015
        } else if (distance == "7-10 miles") {
            range = .017
        }

        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                address = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                }
                initMap2(address)
                runningMaps.map((currMap) => {
                    currMap.findCoordinates(address.lat, address.lng, range);
                    currMap.calculateAndDislayRoute(directionsService, stepDisplay);
                })
            } else {
            }
        })
    };
});

initMap2 = function (coordLocation = "") {
    if (runningMaps.length === 0) {
        runningMaps.push(new CircleMap('map', 14, 90, 'instructions'));
        runningMaps.push(new CircleMap('map2', 14, 45, 'instructions2'));
        runningMaps.push(new CircleMap('map3', 14, 120, 'instructions3'));
        runningMaps.push(new CircleMap('map4', 14, 25, 'instructions4'));
    }
    directionsService = new google.maps.DirectionsService;
    stepDisplay = new google.maps.InfoWindow;

    runningMaps.map((currMap) => {
        currMap.initialize(coordLocation);
        currMap.directionsDisplay.setPanel(document.getElementById(currMap.idForInstuctions));
    })
}

function reset() {
    runningMaps.map((currMap) => {
        currMap.reset();
    })
    latArray = []
    lngArray = []
    directionsService = new google.maps.DirectionsService;
    stepDisplay = new google.maps.InfoWindow;
}
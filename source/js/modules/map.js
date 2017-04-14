

function initMap() {
 
    if ($('#baumanskaya').hasClass('active')) {

        var myLatLng = {lat: 55.776237, lng: 37.675454};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            scrollwheel: false,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Магазин отдыха',
            icon: {
                url: "assets/img/location.png"
            }
        });
        var lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };

        var flightPlanCoordinates = [
            {lat: 55.776331, lng: 37.675667},
            {lat: 55.776392, lng: 37.675999},
            {lat: 55.775535, lng: 37.677716},
            {lat: 55.774950, lng: 37.677909},
            {lat: 55.774008, lng: 37.678220},
            {lat: 55.773121, lng: 37.678328},
            {lat: 55.772514, lng: 37.678504},
            {lat: 55.772607, lng: 37.679116}
        ];
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#f3a10a',
            strokeOpacity: 0,
            strokeWeight: 3,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }],

        });

        flightPath.setMap(map);
    }
    if ($('#krasniselskaya').hasClass('active')) {
        var myLatLng = {lat: 55.776237, lng: 37.675454};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            scrollwheel: false,
            center: {lat: 55.777480, lng: 37.670800}
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'systemice event',
            icon: {
                url: "assets/img/location.png"
            }
        });
        var lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };

        var flightPlanCoordinates = [
            {lat: 55.779717, lng: 37.666084},
            {lat: 55.779605, lng: 37.665863},
            {lat: 55.776263, lng: 37.670514},
            {lat: 55.776335, lng: 37.670808},
            {lat: 55.776371, lng: 37.671095},
            {lat: 55.776367, lng: 37.671241},
            {lat: 55.776349, lng: 37.671401},
            {lat: 55.776320, lng: 37.671541},
            {lat: 55.776308, lng: 37.671604},
            {lat: 55.776394, lng: 37.671893},
            {lat: 55.777387, lng: 37.673926},
            {lat: 55.776417, lng: 37.675800},
            {lat: 55.776391, lng: 37.675853},
            {lat: 55.776342, lng: 37.675713}
        ];
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#f3a10a',
            strokeOpacity: 0,
            strokeWeight: 3,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }],

        });

        flightPath.setMap(map);
    }
    if ($('#parking').hasClass('active')) {
        var myLatLng = {lat: 55.776237, lng: 37.675454};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            scrollwheel: false,
            center: {lat: 55.777480, lng: 37.670800}
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'systemice event',
            icon: {
                url: "assets/img/location.png"
            }
        });


    }
    if ($('#map').hasClass('main-map')) {
        var myLatLng = {lat: 55.776237, lng: 37.675454};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            scrollwheel: false,
            center: {lat: 55.777480, lng: 37.670800}
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'systemice event',
            icon: {
                url: "assets/img/location.png"
            }
        });


    }
 }
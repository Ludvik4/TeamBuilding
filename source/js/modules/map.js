function initMap() {
    var myLatLng = {lat: 55.776237, lng: 37.675454};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        scrollwheel: false,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Мы здесь !'
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
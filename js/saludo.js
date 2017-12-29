// La funcionalidad de tu proyecto
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: -12.082,
            lng: -76.9282
        }
    });
    directionsDisplay.setMap(map);
    var startPoint = document.getElementById('start-point');
    var finalPoint = document.getElementById('final-point');
    new google.maps.places.Autocomplete(startPoint);
    new google.maps.places.Autocomplete(finalPoint);

    var getRoute = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('route').addEventListener('click', getRoute);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: document.getElementById('start-point').value,
        destination: document.getElementById('final-point').value,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Estamos teniendo inconvenientes para encontrar su ubicación');
        }
        document.getElementById('start-point').value = '';
        document.getElementById('final-point').value = '';
    });
}
var App = (function (app) {

    app.Geolocation = (function () {

        function onRequestSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML =
                'Latitude: '           + position.coords.latitude              + '<br />' +
                'Longitude: '          + position.coords.longitude             + '<br />' +
                'Altitude: '           + position.coords.altitude              + '<br />' +
                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                'Heading: '            + position.coords.heading               + '<br />' +
                'Speed: '              + position.coords.speed                 + '<br />' +
                'Timestamp: '          + position.timestamp                    + '<br />';
        }

        function onRequestError(error) {
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }

        function requestPosition() {
            navigator.geolocation.getCurrentPosition(onRequestSuccess, onRequestError);
        }

        return {
            requestPosition: requestPosition
        };
    }());

    return app;
}(App || {}));


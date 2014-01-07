var App = (function (app, $) {

    'use strict';

    app.Geolocation = (function () {

        function formatDate(d) {
            return d.toLocaleTimeString();
        }

        function onRequestSuccess(position) {
            var container = $('.geolocation'),
                date = new Date(position.timestamp);

            $('.geolocation .request').hide();

            $('.latitude', container).text(position.coords.latitude);
            $('.longitude', container).text(position.coords.longitude);
            $('.accuracy', container).text(position.coords.accuracy);
            $('.altitude', container).text(position.coords.altitude);
            $('.altitudeAccuracy', container).text(position.coords.altitudeAccuracy);
            $('.heading', container).text(position.coords.heading);
            $('.speed', container).text(position.coords.speed);
            $('.time', container).text(formatDate(date));
        }

        function onRequestError(error) {
            $('.geolocation .request').hide();
            $('.geolocation .error').text('code: ' + error.code  + '; message: ' + error.message);
        }

        function requestPosition() {
            $('.geolocation .request').show();
            navigator.geolocation.getCurrentPosition(onRequestSuccess, onRequestError, {
                enableHighAccuracy: false
            });
        }

        return {
            requestPosition: requestPosition
        };
    }());

    return app;
}(App || {}, jQuery));


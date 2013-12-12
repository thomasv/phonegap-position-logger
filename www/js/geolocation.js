var App = (function (app, $) {

    app.Geolocation = (function () {

        function formatDate(d) {
            return d.toLocaleDateString() + ', ' + d.toLocaleTimeString();
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
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }

        function requestPosition() {
            $('.geolocation .request').show();
            navigator.geolocation.getCurrentPosition(onRequestSuccess, onRequestError);
        }

        return {
            requestPosition: requestPosition
        };
    }());

    return app;
}(App || {}, jQuery));


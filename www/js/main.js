/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var App = (function (app) {

    app.Main = (function () {

        // time in ms
        var updateInterval = 10000;

        function track() {
            App.Geolocation.requestPosition();
        }

        function onDeviceReady() {
            track();
            setInterval(track, updateInterval);
        }

        function init() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

        return {
            init: init
        };
    }());

    return app;

}(App || {}));

$(function () {
    App.Main.init();
});

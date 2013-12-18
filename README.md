phonegap-position-logger
========================

A logging app showing the GPS latitude/longitude and WiFi accespoints created with phonegap.

> Basic app structure from [phonegap-start][phonegap-start]

## Setup

### Requirements

- Java JDK 1.5 or greater
- Apache ANT 1.8.0 or greater
- Android SDK [http://developer.android.com](http://developer.android.com)


### Install phonegap

    npm install -g phonegap

If `npm` doesn't work, [install latest nodejs](http://nodejs.org).


## Usage

### Run application on emulator (Android)

**Important**: _For geolocation the option `enableHighAccuracy` in function call `navigator.geolocation.getCurrentPosition` must be set
to `true` when running on emulator (see `www/js/geolocation.js`)_

1. Start emulator

2. Set latitude and longitude for emulator (i.e. lat 50, lon 9)

        telnet localhost 5554
        geo fix 50 9

3. Set orientation for emulator (i.e. 135 degress for south east orientation)

        telnet localhost 5554
        sensor set orientation 135:0:0

4. Compile application and install on emulator

        phonegap local run android

### Run application on device (Android)

1. Build app

        phonegap local build android

2. Copy file `platforms/android/bin/PositionLogger-debug.apk` to your phone and install

[cordova-app]: http://github.com/apache/cordova-app-hello-world
[phonegap-start]: http://github.com/phonegap/phonegap-start


# cordova-plugin-customtabs

A cordova plugin to launch a url in chrome custom tabs. Currently it supports on android platform. To listen for the load event of a particular url and get the controll back to the application, `URL_SCHEME` and `URL_HOST` must be passed.

## Installation
Before installing you need to make sure you have `scheme` and `host` set in your string variables.

Ionic:

`ionic cordova plugin add https://github.com/souvikmondal/cordova-plugin-customtabs.git --variable URL_SCHEME=<your_scheme> --variable URL_HOST=<your_host>`

Cordova:

`cordova plugin add https://github.com/souvikmondal/cordova-plugin-customtabs.git --variable URL_SCHEME=<your_scheme> --variable URL_HOST=<your_host>`

## APIs

### isAvailable
```js
cordova.customtabs.isAvailable(successCallback, errorCallback);
```
Invoke **successCallback** if custom tabs is available in the device, else **errorCallback** is invoked.

### launch

```js
cordova.customtabs.launch(url, successCallback);
```

Launch the `url` in custom tabs. **successCallback** is invoked with the url registered during installation time.


## Support Platforms
|Platform|
|-|
|Android|
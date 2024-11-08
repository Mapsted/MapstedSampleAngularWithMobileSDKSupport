## For changing version of sdk and publish new version of plugin on npm.


## mapsted-cordova-plugin

### 1. Open plugin.xml file find sdk version and replace updated version number all place.

### Android
```sh
    <framework src="com.mapsted:sdk-map-ui:6.0.2" />
    <framework src="com.mapsted:sdk-map:6.0.2" />
    <framework src="com.mapsted:sdk-core:6.0.2" />
```

### iOS
```sh
    <pod name="mapsted-sdk-map" spec="6.0.2" />
    <pod name="mapsted-sdk-map-ui" spec="6.0.2" />
    <pod name="mapsted-sdk-geofence" spec="6.0.2" />
```

### 2. Open package.json file find version ("version": "") and update version number.

### 3 Publish package
```sh 
    npm publish
```

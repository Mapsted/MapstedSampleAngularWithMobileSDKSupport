cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "mapsted-cordova-plugin.MapstedCordovaPlugin",
      "file": "plugins/mapsted-cordova-plugin/www/MapstedCordovaPlugin.js",
      "pluginId": "mapsted-cordova-plugin",
      "clobbers": [
        "MapstedCordovaPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "mapsted-cordova-plugin": "1.0"
  };
});
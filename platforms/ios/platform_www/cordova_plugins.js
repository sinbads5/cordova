cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-datepicker.DatePicker",
      "file": "plugins/cordova-plugin-datepicker/www/ios/DatePicker.js",
      "pluginId": "cordova-plugin-datepicker",
      "clobbers": [
        "datePicker"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-datepicker": "0.9.3",
    "cordova-plugin-datetimepicker": "1.0.0"
  };
});
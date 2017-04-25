module.exports = function (context) {

    var pluginlist = [
        "cordova-plugin-crosswalk-webview",
        "cordova-plugin-whitelist",
        "cordova-plugin-vibration",
    ];

    var fs = require('fs');
    var path = require('path');
    var exec = require('child_process').exec;

    function log(error, stdout, stderr) {
        console.log(stdout);
    }

    pluginlist.forEach(function(plugin) {
        exec("cordova plugin add " + plugin, log);
    });

}
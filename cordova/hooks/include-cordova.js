module.exports = function (context) {
    var file = './platforms/android/assets/www/index.html';
    var fs = require('fs');
    var old = fs.readFileSync(file, 'utf8')
    var modified = old.replace(/<!--include cordova.js-->/g, '<script src="cordova.js"></script>');
    fs.writeFileSync(file, modified, 'utf8');
}
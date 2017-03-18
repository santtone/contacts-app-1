contactsApp.utils = (function () {
    var googleMapsUrl = 'https://www.google.com/maps?q=';
    return {
        buildGoogleMapsLink: function (address) {
            var url = googleMapsUrl + address;
            return '<a target="_blank" href="' + url + '">' + address + '</a>'
        }
    }
})();
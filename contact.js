contactsApp.contact = function (firstName, lastName, phone, streetAddress, city) {

    function parseAddress(streetAddress, city) {
        var addressParts = [streetAddress || null, city || null];
        addressParts = _.reject(addressParts, _.isNull);
        return addressParts.join().replace(',', ', ');
    }

    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: parseAddress(streetAddress, city)
    }
};
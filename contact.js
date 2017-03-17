contactsApp.contact = function (firstName, lastName, phone, streetAddress, city) {
    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: streetAddress + ', ' + city
    }
};
contactsApp.contactStore = (function () {

    var localStorageContactsKey = 'ca-contacts';
    if (!localStorage.getItem(localStorageContactsKey)) {
        localStorage.setItem(localStorageContactsKey, JSON.stringify([]));
    }

    function readLocalStorageContacts() {
        var data = localStorage.getItem(localStorageContactsKey);
        return JSON.parse(data);
    }

    function writeLocalStorageContacts(contacts) {
        contacts = JSON.stringify(contacts);
        return localStorage.setItem(localStorageContactsKey, contacts);
    }

    return {
        saveContact: function (contact) {
            var contacts = readLocalStorageContacts();
            contacts.push(contact);
            writeLocalStorageContacts(contacts);
        },
        loadContacts: function () {
            return readLocalStorageContacts();
        }
    }
})();
contactsApp.contactStore = (function () {
    var localStorageContactsKey = 'ca-contacts';

    function readLocalStorageContacts(){
        return localStorage.getItem(localStorageContactsKey);
    }

    function writeLocalStorageContacts(contacts){
        return localStorage.setItem(localStorageContactsKey, contacts);
    }

    return {
        saveContact: function (contact) {
            var contacts = readLocalStorageContacts();
            contacts.push(contact);
            writeLocalStorageContacts(contacts);
        },
        loadContacts: function(){
            return readLocalStorageContacts();
        }
    }
})();
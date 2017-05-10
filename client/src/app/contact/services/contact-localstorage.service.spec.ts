import {TestBed, inject} from '@angular/core/testing';
import * as _ from 'lodash';

import {ContactLocalStorageService} from './contact-localstorage.service';
import {Contact} from '../contact';

describe('ContactLocalStorageService', () => {

  let localStorageKey = 'ca-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalStorageService]
    });
  });

  beforeEach(() => {
    let store = {};
    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });
  });

  function contactArray() {
    return [
      new Contact(1, 'First', 'Contact', '01234567', 'Street Address', 'City'),
      new Contact(2, 'Second', 'Contact', '01234567', 'Street Address', 'City'),
      new Contact(3, 'Third', 'Contact', '01234567', 'Street Address', 'City')
    ];
  }

  it('should initialize local storage', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let value = localStorage.getItem(localStorageKey);
    expect(JSON.parse(value)).toEqual([]);
  }));

  it('#findContacts should return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let dummyContacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(dummyContacts));
    service.findContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toEqual(3);
      _.forEach(contacts, function (c) {
        expect(dummyContacts).toContain(_.create(Contact.prototype, c));
      });
    });
  }));

  it('#findContactById should return contact by id', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    service.findContactById(1).subscribe((contact: Contact) => {
      expect(contact.id).toBe(1);
      contact = _.create(Contact.prototype, contact);
      expect(contacts[0]).toEqual(contact);
    })
  }));

  it('#saveContact should save contact and return saved contact from store', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contact: Contact = new Contact(null, 'FirstName', 'LastName', '01234567', 'Street Address', 'City');
    service.saveContact(contact).subscribe((saved: Contact) => {
      expect(saved.id).toBeDefined();
      let storedContacts = JSON.parse(localStorage.getItem(localStorageKey));
      expect(storedContacts.length).toEqual(1);
      expect(saved.id).toEqual(storedContacts[0].id);
    });
  }));

  it('#saveContact should update existing contact', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contact = contacts[0];
    contact.firstName = 'new firstName';
    contact.lastName = 'new lastName';
    service.saveContact(contact).subscribe((saved: Contact) => {
      expect(saved.firstName).toEqual('new firstName');
      expect(saved.lastName).toEqual('new lastName');
    });
  }));

});

import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {ContactStore} from "./contact-store";

@Injectable()
export class ContactLocalStorageService implements ContactStore{

  private localStorageKey = 'ca-contacts';

  constructor() {
    this.initializeLocalStorage();
  }

  public saveContact(contact: Contact) {
    let contacts = this.readLocalStorageContacts();
    contacts.push(contact);
    this.writeLocalStorageContacts(contacts);
  }

  public loadContacts() {
    return this.readLocalStorageContacts();
  }

  private initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  private readLocalStorageContacts() {
    let data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data);
  }

  private writeLocalStorageContacts(contacts) {
    contacts = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, contacts);
  }

}

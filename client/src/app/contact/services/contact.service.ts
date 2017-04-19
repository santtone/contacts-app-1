import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';
import {ContactLocalStorageService} from "./contact-localstorage.service";
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  constructor(private localStorage: ContactLocalStorageService) {
  }

  saveContact(contact: Contact) {
    return this.localStorage.saveContact(contact);
  }

  deleteContact(contact: Contact) {
    return this.localStorage.deleteContact(contact);
  }

  findAllContacts() {
    return this.localStorage.loadContacts();
  }

}

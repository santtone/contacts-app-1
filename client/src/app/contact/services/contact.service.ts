import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';
import {ContactLocalStorageService} from "./contact-localstorage.service";
import {Contact} from "../contact";
import {ContactStore} from "./contact-store";
import {ContactApiService} from "./contact-api.service";

@Injectable()
export class ContactService {

  private contactStore: ContactStore;

  constructor(localStorage: ContactLocalStorageService, webApiStorage: ContactApiService) {
    this.contactStore = environment.localStorageOnly ? localStorage : webApiStorage;
  }

  saveContact(contact: Contact) {
    this.contactStore.saveContact(contact);
  }

  deleteContact(contact: Contact) {
    this.contactStore.deleteContact(contact);
  }

  findAllContacts() {
    return this.contactStore.loadContacts();
  }

}

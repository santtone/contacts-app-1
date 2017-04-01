import { Injectable } from '@angular/core';
import {ContactLocalStorageService} from "./contact-localstorage.service";
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  constructor(public contactStore: ContactLocalStorageService) { }

  saveContact(contact: Contact){
    this.contactStore.saveContact(contact);
  }

  findAllContacts(){
    return this.contactStore.loadContacts();
  }

}

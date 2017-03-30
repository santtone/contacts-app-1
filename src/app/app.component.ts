import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactStoreService} from "./contact/services/contact-store.service";


@Component({
  selector: 'ca-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  contacts = [];

  constructor(contactStore: ContactStoreService) {
    //let contact = new Contact('Sami', 'Anttonen', '040123456', 'Losojätkäntie 1', 'Kouvola');
    //contactStore.saveContact(contact);
    this.contacts = contactStore.loadContacts();
  }
}

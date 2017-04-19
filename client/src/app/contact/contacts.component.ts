import { Component, OnInit } from '@angular/core';
import {ContactService} from "./services/contact.service";
import {DialogService} from "../utils/dialog.service";
import {Contact} from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {


  contacts = [];

  constructor(public contactService: ContactService,
              public dialog: DialogService) {
  }

  ngOnInit(): void {
    this.reloadContacts();
  }

  addContact() {
    this.editAndSaveContact(null);
  }

  onEditContact(contact: Contact) {
    this.editAndSaveContact(contact);
  }

  onDeleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.reloadContacts();
  }

  onShowContactOnMap(contact: Contact) {
    let address = contact.streetAddress + ', ' + contact.city;
    this.dialog.mapDialog(address);
  }

  reloadContacts() {
    this.contacts = this.contactService.findAllContacts();
  }

  private editAndSaveContact(contact) {
    this.dialog.contactDialog(contact).subscribe(contact => {
      if (contact) {
        this.contactService.saveContact(contact);
        this.reloadContacts();
      }
    });
  }

}

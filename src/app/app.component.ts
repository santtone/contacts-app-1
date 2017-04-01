import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";
import {ContactService} from "./contact/services/contact.service";
import {Contact} from "./contact/contact";
import {DialogService} from "./utils/dialog.service";


@Component({
  selector: 'ca-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

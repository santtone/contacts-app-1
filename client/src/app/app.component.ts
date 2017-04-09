import {Component, OnInit} from '@angular/core';
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
    this.contactService.deleteContact(contact).subscribe(data => this.reloadContacts());

  }

  onShowContactOnMap(contact: Contact) {
    let address = contact.streetAddress + ', ' + contact.city;
    this.dialog.mapDialog(address);
  }

  reloadContacts() {
    this.contactService.findAllContacts().subscribe(contacts => this.contacts = contacts);
  }

  private editAndSaveContact(contact) {
    this.dialog.contactDialog(contact).subscribe(contact => {
      if (contact) {
        this.contactService.saveContact(contact).subscribe(data => this.reloadContacts());
      }
    });
  }
}

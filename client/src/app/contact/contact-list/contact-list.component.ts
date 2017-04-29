import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from "../services/contact.service";
import {DialogService} from "../../utils/dialog.service";
import {ObservableMedia} from "@angular/flex-layout";
import {Router} from "@angular/router";

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(public contactService: ContactService, public dialog: DialogService,
              private media: ObservableMedia, private router: Router ) {
    this.contacts = [];
  }

  ngOnInit(): void {
    this.reloadContacts();
  }

  addContact() {
    this.editAndSaveContact(null);
  }

  editContact(contact: Contact) {
    this.editAndSaveContact(contact);
  }

  removeContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(data => this.reloadContacts());
  }

  showContactOnMap(contact: Contact) {
    let address = contact.streetAddress + ', ' + contact.city;
    this.dialog.mapDialog(address);
  }

  reloadContacts() {
    this.contactService.findAllContacts().subscribe(contacts => this.contacts = contacts);
  }

  private editAndSaveContact(contact: Contact) {
    if(this.media.isActive('xs') || this.media.isActive('sm')){
      this.router.navigate(['/contacts', contact.id]);
      return;
    }
    this.dialog.contactDialog(contact).subscribe(contact => {
      if (contact) {
        this.contactService.saveContact(contact).subscribe(data => this.reloadContacts());
      }
    });
  }
}

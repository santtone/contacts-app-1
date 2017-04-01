import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";
import {ContactService} from "./contact/services/contact.service";


@Component({
  selector: 'ca-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts = [];

  constructor(public contactService: ContactService,
              public dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.reloadContacts();
  }

  addContact() {
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.afterClosed().subscribe(contact => {
      if (contact) {
        this.contactService.saveContact(contact);
        this.reloadContacts();
      }
    });
  }

  reloadContacts() {
    this.contacts = this.contactService.findAllContacts();
  }
}

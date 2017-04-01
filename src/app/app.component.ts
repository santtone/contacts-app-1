import {Component, OnInit} from '@angular/core';
import {ContactStoreService} from "./contact/services/contact-store.service";
import {MdDialog} from "@angular/material";
import {NewContactDialogComponent} from "./contact/new-contact/new-contact-dialog.component";


@Component({
  selector: 'ca-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts = [];

  constructor(public contactStore: ContactStoreService,
              public dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.reloadContacts();
  }

  addContact() {
    let dialogRef = this.dialog.open(NewContactDialogComponent);
    dialogRef.afterClosed().subscribe(contact => {
      if (contact) {
        this.contactStore.saveContact(contact);
        this.reloadContacts();
      }
    });
  }

  reloadContacts() {
    this.contacts = this.contactStore.loadContacts();
  }
}

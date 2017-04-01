import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {MdDialogRef} from "@angular/material";

@Component({
  templateUrl: './contact-dialog.component.html'
})
export class ContactDialogComponent implements OnInit {

  dialogRef;
  contact: Contact;
  isValid: boolean;

  constructor(dialogRef: MdDialogRef<ContactDialogComponent>) {
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {
    if (!this.contact) {
      this.contact = new Contact();
    }
    this.validate();
  }

  validate() {
    this.isValid = !!(this.contact.firstName && this.contact.lastName);
  }

  add() {
    this.dialogRef.close(this.contact);
  }

  cancel() {
    this.dialogRef.close();
  }
}

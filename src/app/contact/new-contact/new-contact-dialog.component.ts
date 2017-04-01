import {Component} from '@angular/core';
import {Contact} from '../contact';
import {MdDialogRef} from "@angular/material";

@Component({
  templateUrl: './new-contact-dialog.component.html'
})
export class NewContactDialogComponent {

  dialogRef;
  contact: Contact;
  isValid: boolean;

  constructor(dialogRef: MdDialogRef<NewContactDialogComponent>) {
    this.dialogRef = dialogRef;
    this.contact = new Contact();
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

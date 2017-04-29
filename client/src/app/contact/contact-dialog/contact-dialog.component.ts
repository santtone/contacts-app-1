import {Component, OnInit, ReflectiveInjector} from '@angular/core';
import {Contact} from '../contact';
import {MdDialogRef} from "@angular/material";

@Component({
  templateUrl: './contact-dialog.component.html'
})
export class ContactDialogComponent implements OnInit {

  contact: Contact;
  isValid: boolean;

  constructor(private dialogRef?: MdDialogRef<ContactDialogComponent>) {
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

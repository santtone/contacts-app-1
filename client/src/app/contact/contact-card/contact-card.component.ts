import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../contact';

@Component({
  templateUrl: './contact-card.component.html',
  selector: 'ca-contact-card',
  styleUrls: ['./contact-card.component.css']
})
export class ContactListItemComponent {

  @Input() contact: Contact;
  @Output() edit: EventEmitter<Contact> = new EventEmitter();
  @Output() remove: EventEmitter<Contact> = new EventEmitter();
  @Output() showOnMap: EventEmitter<Contact> = new EventEmitter();

  editContact() {
    this.edit.emit(this.contact);
  }

  removeContact() {
    this.remove.emit(this.contact);
  }

  showContactOnMap() {
    this.showOnMap.emit(this.contact);
  }
}

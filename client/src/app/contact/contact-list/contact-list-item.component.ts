import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../contact';

@Component({
  templateUrl: './contact-list-item.component.html',
  selector: 'ca-contact-list-item',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent {

  @Input() contact: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;

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

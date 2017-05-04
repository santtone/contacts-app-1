import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';

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

  color: string;
  colors: string[] = [
    '#fce4ec',//pink
    '#f3e5f5',//purple
    '#e8eaf6',//indigo
    '#e3f2fd',//blue
    '#e0f2f1',//teal
    '#e8f5e9',//green
    '#fbe9e7',//deep orange
    '#efebe9',//brown
    '#eceff1'//blue grey
  ];

  constructor() {
    this.color = this.colors[_.random(0, 8)];
  }

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

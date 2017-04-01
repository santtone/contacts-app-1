import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: [Contact];
  @Output() editContact: EventEmitter<Contact> = new EventEmitter();
  @Output() removeContact: EventEmitter<Contact> = new EventEmitter();
  @Output() showContactOnMap: EventEmitter<Contact> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}

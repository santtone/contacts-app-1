import {Component, Input} from '@angular/core';
import {Contact} from '../contact';

@Component({
  templateUrl: './contact-list-item.component.html',
  selector: 'ca-contact-list-item',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent {
  @Input() contact: Contact;
}

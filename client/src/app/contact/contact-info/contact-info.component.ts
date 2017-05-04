import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'ca-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactChanged: EventEmitter<Contact>;

  constructor() {
    this.contactChanged = new EventEmitter();
  }

  ngOnInit() {
  }

}

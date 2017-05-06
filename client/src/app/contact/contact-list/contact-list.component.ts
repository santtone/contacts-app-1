import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from "../services/contact.service";
import {DialogService} from "../../utils/dialog.service";
import {ObservableMedia} from "@angular/flex-layout";
import {Router} from "@angular/router";
import {ToolbarProperties, ToolbarService} from "../../toolbar/toolbar.service";

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  searchText: string;

  constructor(public contactService: ContactService, public dialog: DialogService,
              private media: ObservableMedia, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }

  ngOnInit(): void {
    this.reloadContacts();
    this.toolbar.create(new ToolbarProperties({title: 'Contacts', searchEnabled: true}));
    this.toolbar.propertiesChanged.subscribe((properties: ToolbarProperties) => {
      this.searchText = properties.searchText;
    });
  }

  addContact() {
    this.editAndSaveContact(null);
  }

  editContact(contact: Contact) {
    this.editAndSaveContact(contact);
  }

  removeContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(data => this.reloadContacts());
  }

  showContactOnMap(contact: Contact) {
    let address = contact.streetAddress + ', ' + contact.city;
    this.dialog.mapDialog(address);
  }

  reloadContacts() {
    this.contactService.findAllContacts().subscribe(contacts => this.contacts = contacts);
  }

  private editAndSaveContact(contact: Contact) {
    if(this.media.isActive('xs') || this.media.isActive('sm')){
      if(contact) {
        this.router.navigate(['/contacts', contact.id]);
      }else{
        this.router.navigate(['/contacts/new']);
      }
      return;
    }
    this.dialog.contactDialog(contact).subscribe(contact => {
      if (contact) {
        this.contactService.saveContact(contact).subscribe(data => this.reloadContacts());
      }
    });
  }
}

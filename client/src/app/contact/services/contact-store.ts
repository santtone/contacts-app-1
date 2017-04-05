import {Contact} from "../contact";
export interface ContactStore {
  loadContacts();
  saveContact(contact: Contact)
}

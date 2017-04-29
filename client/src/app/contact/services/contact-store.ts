import {Contact} from "../contact";
import {Observable} from "rxjs";

export interface ContactStore {
  loadContacts(): Observable<Contact[]>;
  saveContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
  findContactById(id): Observable<Contact>;
}

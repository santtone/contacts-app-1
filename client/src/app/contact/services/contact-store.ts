import {Contact} from "../contact";
import {Observable} from "rxjs";

export interface ContactStore {
  findContacts(): Observable<Contact[]>;
  saveContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
  findContactById(id): Observable<Contact>;
}

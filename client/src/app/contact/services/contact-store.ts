import {Contact} from "../contact";
import {Observable} from "rxjs";

export interface ContactStore {
  loadContacts(): Observable<any>;
  saveContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
}

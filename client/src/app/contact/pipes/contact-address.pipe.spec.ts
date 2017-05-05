import {ContactAddressPipe} from "./contact-address.pipe";
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {
  
  let pipe = new ContactAddressPipe();

  it('should return streetAddress and city', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '123456', 'Street 1', 'City');
    expect(pipe.transform(contact)).toBe(contact.streetAddress + ', ' + contact.city);
  });

  it('should return streetAddress', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '123456', 'Street 1', '');
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
  });

  it('should return city', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '123456', '', 'City');
    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('should return empty string', () => {
    let contact = new Contact(1, 'FirstName', 'LastName', '123456', '', '');
    expect(pipe.transform(contact)).toBe('');
  });
});

import * as _ from 'lodash';

export class Contact {

  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.streetAddress = streetAddress;
    this.city = city;
  }
}

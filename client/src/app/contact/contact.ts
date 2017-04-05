import * as _ from 'lodash';

export class Contact {

  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  city: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.streetAddress = streetAddress;
    this.city = city;
  }
}

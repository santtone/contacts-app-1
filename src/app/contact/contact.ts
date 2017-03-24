import * as _ from 'lodash';

export class Contact {

  firstName: string;
  lastName: string;
  phone: string;
  address: string;

  constructor(firstName: string, lastName: string, phone: string, streetAddress: string, city: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = this.parseAddress(streetAddress, city);
  }

  private parseAddress(streetAddress, city) {
    let addressParts = [streetAddress || null, city || null];
    addressParts = _.reject(addressParts, _.isNull);
    return addressParts.join().replace(',', ', ');
  }

}

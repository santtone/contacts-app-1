import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";

@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {

    function parseAddress(streetAddress, city) {
      let addressParts = [streetAddress || null, city || null];
      addressParts = _.reject(addressParts, _.isNull);
      return addressParts.join().replace(',', ', ');
    }
    return parseAddress(contact.streetAddress, contact.city);
  }

}

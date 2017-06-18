import {TestBed, inject} from '@angular/core/testing';
import {Contact} from '../contact';
import {ContactApiService} from "./contact-api.service";
import {HttpModule, RequestOptions, ResponseOptions} from "@angular/http";
import {Response} from '@angular/http';
import {MockBackend} from "@angular/http/testing";
import {HttpService} from "../../utils/http.service";

describe('ContactApiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ContactApiService,
        {provide: MockBackend, useClass: MockBackend},
        {
          provide: HttpService,
          useFactory: function (backend: MockBackend, options: RequestOptions) {
            return new HttpService(backend, options);
          },
          deps: [MockBackend, RequestOptions]
        }
      ]
    });
  });

  function contactArray() {
    return [
      new Contact(1, 'First', 'Contact', '01234567', 'Street Address', 'City'),
      new Contact(2, 'Second', 'Contact', '01234567', 'Street Address', 'City'),
      new Contact(3, 'Third', 'Contact', '01234567', 'Street Address', 'City')
    ];
  }

  it('should return all contacts', inject([ContactApiService, MockBackend], (service: ContactApiService, backend: MockBackend) => {
    backend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(contactArray())
      })));
    });
    service.findContacts().subscribe((data) => {
      console.log(data);
      expect(data.length).toBe(3);
    });
  }));

});

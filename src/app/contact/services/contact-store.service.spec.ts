import { TestBed, inject } from '@angular/core/testing';

import { ContactStoreService } from './contact-store.service';

describe('ContactStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactStoreService]
    });
  });

  it('should ...', inject([ContactStoreService], (service: ContactStoreService) => {
    expect(service).toBeTruthy();
  }));
});

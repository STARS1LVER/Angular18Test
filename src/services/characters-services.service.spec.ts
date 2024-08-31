import { TestBed } from '@angular/core/testing';

import { CharactersServicesService } from '../characters-services.service';

describe('CharactersServicesService', () => {
  let service: CharactersServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

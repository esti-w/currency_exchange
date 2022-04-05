import { TestBed } from '@angular/core/testing';

import { ConvertibleDataService } from './convertible-data.service';

describe('ConvertibleDataService', () => {
  let service: ConvertibleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertibleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

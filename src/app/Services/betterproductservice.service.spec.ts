import { TestBed } from '@angular/core/testing';

import { BetterproductserviceService } from './betterproductservice.service';

describe('BetterproductserviceService', () => {
  let service: BetterproductserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetterproductserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

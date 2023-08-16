import { TestBed } from '@angular/core/testing';

import { ShearingService } from './shearing.service';

describe('ShearingService', () => {
  let service: ShearingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShearingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

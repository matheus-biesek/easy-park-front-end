import { TestBed } from '@angular/core/testing';

import { OpenParkingService } from './open-parking.service';

describe('OpenParkingService', () => {
  let service: OpenParkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenParkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CloseParkingService } from './close-parking.service';

describe('CloseParkingService', () => {
  let service: CloseParkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseParkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReserveVacancyService } from './reserve-vacancy.service'; 

describe('ReserveVacancyService', () => {
  let service: ReserveVacancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveVacancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

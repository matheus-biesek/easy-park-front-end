import { TestBed } from '@angular/core/testing';

import { CreateVacancyService } from './create-vacancy.service';

describe('VacancyService', () => {
  let service: CreateVacancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateVacancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StatusVacanciesService } from './status-vacancies.service'; 

describe('StatusVacanciesService', () => {
  let service: StatusVacanciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusVacanciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

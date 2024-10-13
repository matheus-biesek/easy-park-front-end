import { TestBed } from '@angular/core/testing';

import { VacancyStatisticsService } from './vacancy-statistics.service';

describe('VacancyStatisticsService', () => {
  let service: VacancyStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacancyStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

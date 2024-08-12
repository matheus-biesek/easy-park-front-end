import { TestBed } from '@angular/core/testing';

import { DeleteVacancyService } from './delete-vacancy.service';

describe('DeleteVacancyService', () => {
  let service: DeleteVacancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteVacancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

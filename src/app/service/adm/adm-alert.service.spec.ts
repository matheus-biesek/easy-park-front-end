import { TestBed } from '@angular/core/testing';

import { AdmAlertService } from './adm-alert.service';

describe('AdmAlertService', () => {
  let service: AdmAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

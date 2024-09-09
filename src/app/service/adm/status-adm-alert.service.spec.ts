import { TestBed } from '@angular/core/testing';

import { StatusAdmAlertService } from './status-adm-alert.service';

describe('StatusAdmAlertService', () => {
  let service: StatusAdmAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusAdmAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

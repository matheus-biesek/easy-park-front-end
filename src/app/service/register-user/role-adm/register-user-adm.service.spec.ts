import { TestBed } from '@angular/core/testing';

import { RegisterUserAdmService } from './register-user-adm.service';

describe('RegisterUserAdmService', () => {
  let service: RegisterUserAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUserAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

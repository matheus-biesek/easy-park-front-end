import { TestBed } from '@angular/core/testing';

import { RegisterUserUserService } from './register-user-user.service'; 

describe('RegisterUserClientService', () => {
  let service: RegisterUserUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUserUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

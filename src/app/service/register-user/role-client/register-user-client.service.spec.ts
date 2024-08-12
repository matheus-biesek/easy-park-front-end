import { TestBed } from '@angular/core/testing';

import { RegisterUserClientService } from './register-user-client.service';

describe('RegisterUserClientService', () => {
  let service: RegisterUserClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUserClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UpdateRoleUserService } from './update-role-user.service';

describe('UpdateRoleService', () => {
  let service: UpdateRoleUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateRoleUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

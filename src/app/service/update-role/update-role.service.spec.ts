import { TestBed } from '@angular/core/testing';

import { UpdateRoleService } from './update-role.service';

describe('UpdateRoleService', () => {
  let service: UpdateRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

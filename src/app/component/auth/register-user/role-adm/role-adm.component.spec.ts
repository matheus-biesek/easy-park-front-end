import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAdmComponent } from './role-adm.component';

describe('RoleAdmComponent', () => {
  let component: RoleAdmComponent;
  let fixture: ComponentFixture<RoleAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

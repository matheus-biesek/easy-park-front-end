import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleClientComponent } from './role-client.component';

describe('RoleClientComponent', () => {
  let component: RoleClientComponent;
  let fixture: ComponentFixture<RoleClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

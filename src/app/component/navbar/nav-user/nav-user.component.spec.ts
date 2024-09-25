import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserComponent } from './nav-user.component';

describe('NavTopComponent', () => {
  let component: NavUserComponent;
  let fixture: ComponentFixture<NavUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

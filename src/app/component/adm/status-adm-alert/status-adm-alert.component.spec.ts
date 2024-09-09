import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAdmAlertComponent } from './status-adm-alert.component';

describe('StatusAdmAlertComponent', () => {
  let component: StatusAdmAlertComponent;
  let fixture: ComponentFixture<StatusAdmAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusAdmAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusAdmAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

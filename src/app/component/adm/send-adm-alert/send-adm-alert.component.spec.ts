import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAlertComponent } from './send-adm-alert.component';

describe('AdmAlertComponent', () => {
  let component: AdmAlertComponent;
  let fixture: ComponentFixture<AdmAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusVacanciesComponent } from './status-vacancies.component';

describe('StatusVacanciesComponent', () => {
  let component: StatusVacanciesComponent;
  let fixture: ComponentFixture<StatusVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusVacanciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

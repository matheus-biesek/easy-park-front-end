import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveVacancyComponent } from './reserve-vacancy.component';

describe('ReserveVacancyComponent', () => {
  let component: ReserveVacancyComponent;
  let fixture: ComponentFixture<ReserveVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserveVacancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

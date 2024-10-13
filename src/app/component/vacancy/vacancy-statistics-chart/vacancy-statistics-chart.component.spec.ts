import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyStatisticsChartComponent } from './vacancy-statistics-chart.component';

describe('VacancyStatisticsChartComponent', () => {
  let component: VacancyStatisticsChartComponent;
  let fixture: ComponentFixture<VacancyStatisticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyStatisticsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

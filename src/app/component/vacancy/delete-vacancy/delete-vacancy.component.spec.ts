import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVacancyComponent } from './delete-vacancy.component';

describe('DeleteVacancyComponent', () => {
  let component: DeleteVacancyComponent;
  let fixture: ComponentFixture<DeleteVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteVacancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

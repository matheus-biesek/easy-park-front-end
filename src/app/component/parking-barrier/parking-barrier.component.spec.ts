import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingBarrierComponent } from './parking-barrier.component';

describe('ParkingBarrierComponent', () => {
  let component: ParkingBarrierComponent;
  let fixture: ComponentFixture<ParkingBarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParkingBarrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingBarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

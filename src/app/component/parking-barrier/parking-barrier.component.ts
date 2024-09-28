import { Component } from '@angular/core';
import { ParkingLotService } from '../../service/parking-lot.service';

@Component({
  selector: 'app-parking-barrier',
  templateUrl: './parking-barrier.component.html',
  styleUrl: './parking-barrier.component.css'
})
export class ParkingBarrierComponent {
  
  constructor(
    private parkingLotService: ParkingLotService
  ) {}

  openParkingBarrier(): void {
    this.parkingLotService.openParking().subscribe({
      next: (response) => {
        window.alert(response);
      },
      error: (error) => {
        console.error('Erro ao abrir o portão!', error);
        window.alert('Erro ao abrir o portão!');
      }
    });
  }

  closeParkingBarrier(): void {
    this.parkingLotService.closeParking().subscribe({
      next: (response) => {
        window.alert(response);
      },
      error: (error) => {
        console.error('Erro ao fechar o portão!', error);
        window.alert('Erro ao fechar o portão!');
      }
    });
  }
}


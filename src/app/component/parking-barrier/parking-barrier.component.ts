import { Component } from '@angular/core';
import { OpenParkingService } from '../../service/parking-barrier/open-parking.service';
import { CloseParkingService } from '../../service/parking-barrier/close-parking.service';

@Component({
  selector: 'app-parking-barrier',
  templateUrl: './parking-barrier.component.html',
  styleUrl: './parking-barrier.component.css'
})
export class ParkingBarrierComponent {
  constructor(
    private openParkingService: OpenParkingService,
    private closeParkingService: CloseParkingService
  ) {}

  openParkingBarrier(): void {
    this.openParkingService.openParking().subscribe({
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
    this.closeParkingService.closeParking().subscribe({
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


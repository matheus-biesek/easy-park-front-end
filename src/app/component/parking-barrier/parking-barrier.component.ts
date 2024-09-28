import { Component } from '@angular/core';
import { ParkingLotService } from '../../service/parking-lot.service';
import { EnumGate } from '../../interface/enum-gate.model';

@Component({
  selector: 'app-parking-barrier',
  templateUrl: './parking-barrier.component.html',
  styleUrl: './parking-barrier.component.css'
})
export class ParkingBarrierComponent {
  
  constructor(
    private parkingLotService: ParkingLotService
  ) {}

  openGateOne() {
    this.parkingLotService.changeGateStatus(EnumGate.ONE, true).subscribe(
      response => {
        window.alert(response);
      },
      error => {
        window.alert("Erro ao abrir o portão 1!:");
        console.error('Erro ao abrir o portão 1:', error);
      }
    );
  }

  closeGateOne() {
    this.parkingLotService.changeGateStatus(EnumGate.ONE, false).subscribe(
      response => {
        window.alert(response);
      },
      error => {
        window.alert('Erro ao fechar o portão 1!');
        console.log('Erro ao fechar o portão 1:', error);
      }
    );
  }
}


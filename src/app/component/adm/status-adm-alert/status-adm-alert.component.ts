import { Component } from '@angular/core';
import { ParkingLotService } from '../../../service/parking-lot.service';

@Component({
  selector: 'app-status-adm-alert',
  templateUrl: './status-adm-alert.component.html',
  styleUrl: './status-adm-alert.component.css'
})
export class StatusAdmAlertComponent {
  admAlert: string = '';
  errorMessage: string = '';

  constructor(
    private parkingLotService: ParkingLotService
  ) {}

  ngOnInit(): void {
    this.loadAdmAlert();
  }

  loadAdmAlert(): void {
    this.parkingLotService.getAdmAlert().subscribe({
      next: (response: string) => {
        this.admAlert = response;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar a mensagem do administrador';
      }
    });
  }
}
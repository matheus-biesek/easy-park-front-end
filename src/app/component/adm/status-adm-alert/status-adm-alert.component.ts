import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParkingLotService } from '../../../service/parking-lot.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-status-adm-alert',
  templateUrl: './status-adm-alert.component.html',
  styleUrls: ['./status-adm-alert.component.css'] // Corrigido 'styleUrls' no plural
})
export class StatusAdmAlertComponent implements OnInit, OnDestroy {
  admAlert: string = '';
  errorMessage: string = '';
  subscription: Subscription | undefined;

  constructor(private parkingLotService: ParkingLotService) {}

  ngOnInit(): void {
    // Chamada inicial para carregar a mensagem do administrador
    this.loadAdmAlert();

    // Iniciar o loop de requisição a cada 6 segundos (6000 ms)
    this.subscription = interval(6000).subscribe(() => {
      this.loadAdmAlert();
    });
  }

  // Método para carregar a mensagem do administrador
  loadAdmAlert(): void {
    this.parkingLotService.collectAdmAlert().subscribe({
      next: (response: string) => {
        this.admAlert = response;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar a mensagem do administrador';
      }
    });
  }

  // Desinscrever do intervalo para evitar vazamentos de memória
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

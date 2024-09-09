import { Component } from '@angular/core';
import { StatusAdmAlertService } from '../../../service/adm/status-adm-alert.service';

@Component({
  selector: 'app-status-adm-alert',
  templateUrl: './status-adm-alert.component.html',
  styleUrl: './status-adm-alert.component.css'
})
export class StatusAdmAlertComponent {
  admAlert: string = '';
  errorMessage: string = '';

  constructor(private statusAdmAlertService: StatusAdmAlertService) {}

  ngOnInit(): void {
    this.loadAdmAlert();
  }

  // Método para carregar o alerta do ADM
  loadAdmAlert(): void {
    this.statusAdmAlertService.getAdmAlert().subscribe({
      next: (response: string) => {
        this.admAlert = response;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar a mensagem do administrador';
      }
    });
  }
}
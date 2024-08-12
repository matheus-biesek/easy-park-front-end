import { Component } from '@angular/core';
import { ReserveVacancyService } from '../../../service/vacancy/reserve-vacancy/reserve-vacancy.service'; 

@Component({
  selector: 'app-reserve-vacancy',
  templateUrl: './reserve-vacancy.component.html',
  styleUrls: ['./reserve-vacancy.component.css']
})
export class ReserveVacancyComponent {

  position: number = 0;
  // Status fixo como 'Reserved'
  readonly status: string = 'reserved';

  constructor(private reserveVacancyService: ReserveVacancyService) {}

  reserveVacancy(): void {
    const vacancy = { position: this.position, status: this.status };
    this.reserveVacancyService.changeStatusVacancy([vacancy]).subscribe({
      next: (response: string) => {
        window.alert(response);
        this.position = 0; // Limpa o campo de posição após o sucesso
      },
      error: (error: any) => {
        console.error('Error reserving vacancy:', error);
      }
    });
  }
}

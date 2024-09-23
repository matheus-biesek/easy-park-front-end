import { Component } from '@angular/core';
import { VacancyService } from '../../../service/vacancy.service';

@Component({
  selector: 'app-reserve-vacancy',
  templateUrl: './reserve-vacancy.component.html',
  styleUrls: ['./reserve-vacancy.component.css']
})
export class ReserveVacancyComponent {

  position: number = 0;
  // Status fixo como 'Reserved'
  readonly status: string = 'reserved';

  constructor(private vacancyService: VacancyService) {}

  reserveVacancy(): void {
    const vacancy = { position: this.position, status: this.status };
    this.vacancyService.changeStatusVacancy(vacancy).subscribe({ // Enviar apenas o objeto, não um array
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

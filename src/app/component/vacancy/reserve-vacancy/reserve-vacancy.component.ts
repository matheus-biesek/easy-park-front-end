import { Component } from '@angular/core';
import { ReserveVacancyService } from '../../../service/vacancy/reserve-vacancy/reserve-vacancy.service'; 
import { EnumStatusVacancy } from '../../../interface/vacancy.model';

@Component({
  selector: 'app-reserve-vacancy',
  templateUrl: './reserve-vacancy.component.html',
  styleUrls: ['./reserve-vacancy.component.css']
})
export class ReserveVacancyComponent {

  position: number = 0;
  status: EnumStatusVacancy = EnumStatusVacancy.Available;
  statusOptions = Object.values(EnumStatusVacancy);

  constructor(private reserveVacancyService: ReserveVacancyService) {}

  reserveVacancy(): void {
    const vacancy = { position: this.position, status: this.status };
    this.reserveVacancyService.changeStatusVacancy([vacancy]).subscribe({
      next: (response: string) => {
        window.alert(response);
        this.position = 0;
        this.status = EnumStatusVacancy.Available;
      },
      error: (error: any) => {
        console.error('Error reserving vacancy:', error);
      }
    });
  }
}

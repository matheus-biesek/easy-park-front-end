import { Component } from '@angular/core';
import { VacancyService } from '../../../service/vacancy.service';

@Component({
  selector: 'app-vacancy-form',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.css']
})

export class CreateVacancyComponent {

  constructor(
    private vacancyService: VacancyService
  ) {}

  position: number = 0;
  
  onSubmit(): void {
    if (this.position) {
      this.vacancyService.createVacancy( this.position )
        .subscribe({
          next: (response) => {
            window.alert(response);
          },
          error: (error) => {
            console.error('Erro ao criar a vaga!', error);
            window.alert('Erro ao criar a vaga!');
          }
        });
    } else {
      window.alert('Todos os campos são necessarios');
    }
  }
}

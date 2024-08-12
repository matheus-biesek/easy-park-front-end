import { Component } from '@angular/core';
import { CreateVacancyService } from '../../../service/vacancy/create-vacancy/create-vacancy.service';

@Component({
  selector: 'app-vacancy-form',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.css']
})

export class CreateVacancyComponent {

  constructor(private CreateVacancyService: CreateVacancyService) { }

  position: number = 0;
  status: string = '';

  statuses = ['available', 'busy', 'reserved'];

  onSubmit(): void {
    if (this.position && this.status) {
      this.CreateVacancyService.createVacancy({ position: this.position, status: this.status })
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

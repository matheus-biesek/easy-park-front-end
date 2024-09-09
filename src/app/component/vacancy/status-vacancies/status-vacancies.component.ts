import { Component, OnInit } from '@angular/core';
import { StatusVacanciesService } from '../../../service/vacancy/status-vacancies.service';
import { Vacancy } from '../../../interface/vacancy.model';

@Component({
  selector: 'app-status-vacancies',
  templateUrl: './status-vacancies.component.html',
  styleUrls: ['./status-vacancies.component.css']
})
export class StatusVacanciesComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(private statusVacanciesService: StatusVacanciesService) {}

  ngOnInit(): void {
    this.statusVacanciesService.statusVacancies().subscribe({
      next: (response: Vacancy[]) => {
        // Ordena as vagas pela posição antes de atribuí-las à variável vacancies
        this.vacancies = response.sort((a, b) => a.position - b.position);
      },
      error: (err) => {
        console.error('Erro ao carregar status das vagas', err);
      }
    });
  }

  // Retorna a classe CSS com base no status
  getStatusClass(status: string): string {
    switch (status) {
      case 'reserved':
        return 'status-reserved';
      case 'available':
        return 'status-available';
      case 'busy':
        return 'status-busy';
      default:
        return 'status-unknown';
    }
  }

  // Traduz o status para português
  translateStatus(status: string): string {
    switch (status) {
      case 'reserved':
        return 'Reservada';
      case 'available':
        return 'Disponível';
      case 'busy':
        return 'Ocupada';
      default:
        return 'Desconhecido';
    }
  }
}
